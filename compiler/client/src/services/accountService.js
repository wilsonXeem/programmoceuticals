import { apiFetch } from "./api";

export const updateAccount = (token, payload) =>
  apiFetch("/api/account", { method: "PUT", token, body: payload });
