import { apiFetch } from "./api";

export const signUp = (email, username, phone, whatsappNumber, password) =>
  apiFetch("/api/auth/signup", { method: "POST", body: { email, username, phone, whatsappNumber, password } });

export const signIn = (email, password) =>
  apiFetch("/api/auth/signin", { method: "POST", body: { email, password } });

export const fetchMe = (token) => apiFetch("/api/auth/me", { token });
