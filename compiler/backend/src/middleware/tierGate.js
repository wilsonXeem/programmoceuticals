export function requirePaid(req, res, next) {
  if (!req.user || req.user.tier !== "paid") {
    return res.status(403).json({ error: "Paid access required" });
  }

  return next();
}
