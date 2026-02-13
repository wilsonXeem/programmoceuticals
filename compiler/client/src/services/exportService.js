import { apiFetch } from "./api";

export const requestExport = (token, payload) =>
  apiFetch("/api/exports", { method: "POST", body: payload, token });
