import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { ensureAccessState, toUserPayload } from "../utils/accessCodes.js";

export async function updateAccount(req, res) {
  const { email, username, phone, whatsappNumber, password } = req.body || {};

  const updates = {};
  if (email) updates.email = email.toLowerCase().trim();
  if (username) updates.username = username.trim();
  if (phone) updates.phone = phone.trim();
  if (whatsappNumber) updates.whatsappNumber = whatsappNumber.trim();
  if (password) updates.passwordHash = bcrypt.hashSync(password, 10);

  if (updates.email) {
    const existingEmail = await User.findOne({ email: updates.email, _id: { $ne: req.user.id } })
      .select("_id")
      .lean();
    if (existingEmail) {
      return res.status(409).json({ error: "Email already in use" });
    }
  }

  if (updates.username) {
    const existingUsername = await User.findOne({ username: updates.username, _id: { $ne: req.user.id } })
      .select("_id")
      .lean();
    if (existingUsername) {
      return res.status(409).json({ error: "Username already in use" });
    }
  }

  const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true });
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  if (ensureAccessState(user)) {
    await user.save();
  }

  return res.json({ user: toUserPayload(user) });
}
