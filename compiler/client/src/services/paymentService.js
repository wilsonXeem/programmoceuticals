import { apiFetch } from "./api";

export const createPaymentRequest = (token, note, packageName, credits, amountNaira) =>
  apiFetch("/api/payment-requests", {
    method: "POST",
    token,
    body: { note, packageName, credits, amountNaira }
  });

export const fetchPaymentPackages = (token) =>
  apiFetch("/api/payments/packages", { token });

export const initializePayment = (token, packageId, customCredits = null) =>
  apiFetch("/api/payments/initialize", {
    method: "POST",
    token,
    body: {
      packageId,
      ...(customCredits != null ? { customCredits } : {})
    }
  });

export const verifyPayment = (token, reference) =>
  apiFetch(`/api/payments/verify/${encodeURIComponent(reference)}`, { token });
