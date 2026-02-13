import mongoose from "mongoose";

const exportSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    dossierId: { type: mongoose.Schema.Types.ObjectId, ref: "Dossier", required: true }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Export = mongoose.model("Export", exportSchema);

export default Export;
