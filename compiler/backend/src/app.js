import express from "express";
import cors from "cors";
import { config } from "./config/env.js";
import authRoutes from "./routes/authRoutes.js";
import dossierRoutes from "./routes/dossierRoutes.js";
import exportRoutes from "./routes/exportRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import paymentGatewayRoutes from "./routes/paymentGatewayRoutes.js";
import accountRoutes from "./routes/accountRoutes.js";

const app = express();

const resolvedCorsOrigin = (() => {
  const raw = String(config.corsOrigin || "*").trim();
  if (!raw || raw === "*") {
    return true;
  }

  const origins = raw
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  return origins.length > 0 ? origins : true;
})();

app.use(cors({ origin: resolvedCorsOrigin }));
app.use(express.json({ limit: "2mb" }));

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.get("/", (req, res) => {
  res.json({ ok: true, message: "API is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/account", accountRoutes);
app.use("/api/dossiers", dossierRoutes);
app.use("/api/exports", exportRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/payment-requests", paymentRoutes);
app.use("/api/payments", paymentGatewayRoutes);

export default app;
