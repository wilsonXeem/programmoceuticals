import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    username: { type: String, required: true, unique: true, trim: true },
    phone: { type: String, required: true, trim: true },
    whatsappNumber: { type: String, required: true, trim: true },
    passwordHash: { type: String, required: true },
    tier: { type: String, enum: ["free", "paid"], default: "free" },
    exportCredits: { type: Number, default: 0 },
    pendingAccessCodes: { type: [String], default: [] },
    usedAccessCodes: { type: [String], default: [] }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const User = mongoose.model("User", userSchema);

export default User;
