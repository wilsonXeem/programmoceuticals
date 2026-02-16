import Dossier from "../models/Dossier.js";
import User from "../models/User.js";
import Export from "../models/Export.js";
import { consumeAccessCode, ensureAccessState, getCurrentAccessCode } from "../utils/accessCodes.js";

export async function requestExport(req, res) {
  const { dossierId, name, accessCode } = req.body || {};

  let dossier = null;

  if (dossierId) {
    dossier = await Dossier.findOne({ _id: dossierId, userId: req.user.id }).lean();

    if (!dossier) {
      return res.status(404).json({ error: "Dossier not found" });
    }
  } else {
    const created = await Dossier.create({
      userId: req.user.id,
      name: name || "Local Export",
      data: { local_only: true }
    });
    dossier = created.toObject();
  }

  let updatedUser = null;
  if (req.user.tier === "paid") {
    const user = await User.findById(req.user.id).select(
      "tier exportCredits pendingAccessCodes usedAccessCodes"
    );
    if (!user) {
      return res.status(401).json({ error: "Invalid auth token" });
    }

    const changed = ensureAccessState(user);
    const consumed = consumeAccessCode(user, accessCode);

    if (!consumed.ok) {
      if (changed) {
        await user.save();
      }
      if (consumed.reason === "missing_code") {
        return res.status(403).json({
          error: "Access code is required for paid export",
          access_code: consumed.current
        });
      }
      if (consumed.reason === "mismatch_code") {
        return res.status(403).json({
          error: "Access code mismatch. Refresh to sync your current access code",
          access_code: consumed.current
        });
      }
      return res.status(403).json({ error: "No export credits available", access_code: null });
    }

    await user.save();
    updatedUser = user;
  }

  await Export.create({ userId: req.user.id, dossierId: dossier._id || dossier.id });

  return res.json({
    dossier: {
      id: dossier.id || dossier._id?.toString(),
      name: dossier.name,
      data: null
    },
    export_credits: updatedUser ? updatedUser.exportCredits : req.user.export_credits,
    access_code: updatedUser ? getCurrentAccessCode(updatedUser) : null
  });
}
