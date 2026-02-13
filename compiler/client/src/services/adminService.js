import { apiFetch } from "./api";

export const fetchUsers = (token) => apiFetch("/api/admin/users", { token });

export const updateUserTier = (token, userId, tier) =>
  apiFetch("/api/admin/users/tier", { method: "POST", token, body: { userId, tier } });

export const addExportCredits = (token, userId, credits) =>
  apiFetch("/api/admin/users/credits", { method: "POST", token, body: { userId, credits } });

export const fetchPaymentRequests = (token) => apiFetch("/api/admin/payment-requests", { token });

export const fetchPaymentLogs = (token) => apiFetch("/api/admin/payment-logs", { token });

export const updatePaymentRequest = (token, id, status) =>
  apiFetch(`/api/admin/payment-requests/${id}`, { method: "PUT", token, body: { status } });

export const sendAdminEmail = (token, payload) =>
  apiFetch("/api/admin/emails/send", {
    method: "POST",
    token,
    body: payload
  });
