import jwt from "jsonwebtoken";
import { config } from "../config/env.js";
import User from "../models/User.js";
import { ensureAccessState, toUserPayload } from "../utils/accessCodes.js";

export async function authRequired(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ error: "Missing auth token" });
  }

  let payload;
  try {
    payload = jwt.verify(token, config.jwtSecret);
  } catch (error) {
    return res.status(401).json({ error: "Invalid auth token" });
  }

  let user;
  try {
    user = await User.findById(payload.sub).select(
      "email username phone whatsappNumber tier exportCredits pendingAccessCodes usedAccessCodes"
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Auth lookup failed", error);
    return res.status(500).json({ error: "Failed to validate auth token" });
  }

  if (!user) {
    return res.status(401).json({ error: "Invalid auth token" });
  }

  try {
    if (ensureAccessState(user)) {
      await user.save();
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Auth state reconciliation failed", error);
    return res.status(500).json({ error: "Failed to validate auth token" });
  }

  req.user = toUserPayload(user);
  return next();
}

export function adminRequired(req, res, next) {
  const adminEmail = config.adminEmail;
  const userEmail = req.user?.email?.toLowerCase();
  if (!adminEmail || !userEmail || userEmail !== adminEmail) {
    return res.status(403).json({ error: "Admin access required" });
  }

  return next();
}
