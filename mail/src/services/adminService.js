import { apiFetch } from "./api";

export const fetchEmailPreview = (token, payload) =>
  apiFetch("/api/admin/emails/preview", {
    method: "POST",
    token,
    body: payload
  });

export const sendAdminEmail = (token, payload) =>
  apiFetch("/api/admin/emails/send", {
    method: "POST",
    token,
    body: payload
  });
