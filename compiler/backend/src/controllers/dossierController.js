import Dossier from "../models/Dossier.js";

export async function listDossiers(req, res) {
  const dossiers = await Dossier.find({ userId: req.user.id })
    .sort({ updatedAt: -1 })
    .select("name createdAt updatedAt")
    .lean();
  return res.json({
    dossiers: dossiers.map((item) => ({
      id: item._id.toString(),
      name: item.name,
      created_at: item.createdAt,
      updated_at: item.updatedAt
    }))
  });
}

export async function getDossier(req, res) {
  const dossier = await Dossier.findOne({ _id: req.params.id, userId: req.user.id }).lean();

  if (!dossier) {
    return res.status(404).json({ error: "Dossier not found" });
  }

  return res.json({
    dossier: {
      id: dossier._id.toString(),
      name: dossier.name,
      data: dossier.data,
      created_at: dossier.createdAt,
      updated_at: dossier.updatedAt
    }
  });
}

export async function createDossier(req, res) {
  const { name, data } = req.body || {};
  if (!name || !data) {
    return res.status(400).json({ error: "Name and data are required" });
  }

  const dossier = await Dossier.create({ userId: req.user.id, name, data });

  return res.status(201).json({ id: dossier._id.toString() });
}

export async function updateDossier(req, res) {
  const { name, data } = req.body || {};
  if (!name || !data) {
    return res.status(400).json({ error: "Name and data are required" });
  }

  const result = await Dossier.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    { name, data },
    { new: true }
  ).lean();

  if (!result) {
    return res.status(404).json({ error: "Dossier not found" });
  }

  return res.json({ success: true });
}
