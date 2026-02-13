import mongoose from "mongoose";

const dossierSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    name: { type: String, required: true },
    data: { type: mongoose.Schema.Types.Mixed, required: true }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Dossier = mongoose.model("Dossier", dossierSchema);

export default Dossier;
