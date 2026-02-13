import { apiFetch } from "./api";

export const signIn = (email, password) =>
  apiFetch("/api/auth/signin", { method: "POST", body: { email, password } });

export const fetchMe = (token) => apiFetch("/api/auth/me", { token });
