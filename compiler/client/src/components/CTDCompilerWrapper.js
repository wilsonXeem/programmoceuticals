import React from "react";
import CTDCompiler from "./CTDCompiler";
import { useAuth } from "../context/AuthContext";

const CTDCompilerWrapper = () => {
  const { user, token, accessCode, updateAccessCode, updateUser } = useAuth();

  const handleExportStateChange = ({ accessCode: nextAccessCode, exportCredits }) => {
    updateAccessCode(nextAccessCode || null);
    if (typeof exportCredits === "number" && user) {
      updateUser({ ...user, export_credits: exportCredits, access_code: nextAccessCode || null });
    }
  };

  return (
    <CTDCompiler
      userTier={user?.tier || "free"}
      isAuthenticated={Boolean(user)}
      authToken={token}
      accessCode={accessCode}
      onExportStateChange={handleExportStateChange}
    />
  );
};

export default CTDCompilerWrapper;
