import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { signIn, signUp, fetchMe } from "../services/authService";

const AuthContext = createContext(null);

const STORAGE_KEY = "ctd-auth-token";
const ACCESS_CODE_KEY = "ctd-access-code";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem(STORAGE_KEY));
  const [accessCode, setAccessCode] = useState(() => localStorage.getItem(ACCESS_CODE_KEY));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const syncAccessCode = (nextCode) => {
    const normalized = typeof nextCode === "string" ? nextCode.trim().toLowerCase() : "";
    if (normalized) {
      localStorage.setItem(ACCESS_CODE_KEY, normalized);
      setAccessCode(normalized);
      return;
    }
    localStorage.removeItem(ACCESS_CODE_KEY);
    setAccessCode(null);
  };

  useEffect(() => {
    let active = true;

    const init = async () => {
      if (!token) {
        if (active) {
          setUser(null);
          setLoading(false);
        }
        return;
      }

      try {
        const payload = await fetchMe(token);
        if (active) {
          setUser(payload.user);
          syncAccessCode(payload.user?.access_code);
          setLoading(false);
        }
      } catch (error) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(ACCESS_CODE_KEY);
        if (active) {
          setToken(null);
          setAccessCode(null);
          setUser(null);
          setLoading(false);
        }
      }
    };

    init();

    return () => {
      active = false;
    };
  }, [token]);

  const handleSignIn = async (email, password) => {
    const payload = await signIn(email, password);
    localStorage.setItem(STORAGE_KEY, payload.token);
    syncAccessCode(payload.user?.access_code);
    setToken(payload.token);
    setUser(payload.user);
    return payload.user;
  };

  const handleSignUp = async (email, username, phone, whatsappNumber, password) => {
    const payload = await signUp(email, username, phone, whatsappNumber, password);
    localStorage.setItem(STORAGE_KEY, payload.token);
    syncAccessCode(payload.user?.access_code);
    setToken(payload.token);
    setUser(payload.user);
    return payload.user;
  };

  const handleSignOut = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(ACCESS_CODE_KEY);
    setToken(null);
    setAccessCode(null);
    setUser(null);
  };

  const updateUser = (nextUser) => {
    setUser(nextUser);
    syncAccessCode(nextUser?.access_code);
  };

  const updateAccessCode = (nextCode) => {
    syncAccessCode(nextCode);
  };

  const value = useMemo(
    () => ({
      token,
      accessCode,
      user,
      loading,
      signIn: handleSignIn,
      signUp: handleSignUp,
      signOut: handleSignOut,
      updateUser,
      updateAccessCode
    }),
    [token, accessCode, user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
