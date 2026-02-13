import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { config } from "../config/env.js";
import { ensureAccessState, toUserPayload } from "../utils/accessCodes.js";

function issueToken(userId) {
  return jwt.sign({ sub: userId }, config.jwtSecret, { expiresIn: "7d" });
}

export async function signUp(req, res) {
  const { email, password, username, phone, whatsappNumber } = req.body || {};
  if (!email || !password || !username || !phone || !whatsappNumber) {
    return res.status(400).json({ error: "Email, username, phone, WhatsApp number, and password are required" });
  }

  const existing = await User.findOne({ email: email.toLowerCase().trim() }).select("_id").lean();
  if (existing) {
    return res.status(409).json({ error: "Email already in use" });
  }

  const existingUsername = await User.findOne({ username: username.trim() }).select("_id").lean();
  if (existingUsername) {
    return res.status(409).json({ error: "Username already in use" });
  }

  const passwordHash = bcrypt.hashSync(password, 10);
  const user = await User.create({
    email,
    username: username.trim(),
    phone: phone.trim(),
    whatsappNumber: whatsappNumber.trim(),
    passwordHash
  });

  const token = issueToken(user._id.toString());
  return res.json({
    token,
    user: toUserPayload(user)
  });
}

export async function signIn(req, res) {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const user = await User.findOne({ email: email.toLowerCase().trim() }).select(
    "email username phone whatsappNumber passwordHash tier exportCredits pendingAccessCodes usedAccessCodes"
  );

  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  if (ensureAccessState(user)) {
    await user.save();
  }

  const token = issueToken(user._id.toString());
  return res.json({
    token,
    user: toUserPayload(user)
  });
}

export function me(req, res) {
  return res.json({ user: req.user });
}
