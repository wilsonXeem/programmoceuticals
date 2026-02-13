import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

const PromptContext = createContext(null);

const buildId = () => `${Date.now()}-${Math.random().toString(36).slice(2)}`;

export const PromptProvider = ({ children }) => {
  const [dialog, setDialog] = useState(null);
  const [toasts, setToasts] = useState([]);

  const closeDialog = useCallback(() => {
    setDialog(null);
  }, []);

  const alert = useCallback((message, options = {}) => {
    setDialog({
      type: "alert",
      title: options.title || "Notice",
      message,
      confirmLabel: options.confirmLabel || "OK",
    });
  }, []);

  const confirm = useCallback((message, options = {}) => {
    return new Promise((resolve) => {
      setDialog({
        type: "confirm",
        title: options.title || "Please Confirm",
        message,
        confirmLabel: options.confirmLabel || "Confirm",
        cancelLabel: options.cancelLabel || "Cancel",
        onConfirm: () => resolve(true),
        onCancel: () => resolve(false),
      });
    });
  }, []);

  const toast = useCallback((message, options = {}) => {
    const id = buildId();
    const nextToast = {
      id,
      message,
      tone: options.tone || "info",
      duration: options.duration ?? 3500,
    };
    setToasts((prev) => [...prev, nextToast]);
    if (nextToast.duration > 0) {
      window.setTimeout(() => {
        setToasts((prev) => prev.filter((item) => item.id !== id));
      }, nextToast.duration);
    }
  }, []);

  const handleConfirm = () => {
    if (dialog?.onConfirm) dialog.onConfirm();
    closeDialog();
  };

  const handleCancel = () => {
    if (dialog?.onCancel) dialog.onCancel();
    closeDialog();
  };

  const value = useMemo(() => ({ alert, confirm, toast }), [alert, confirm, toast]);

  return (
    <PromptContext.Provider value={value}>
      {children}
      {dialog && (
        <div className="prompt-overlay" role="presentation">
          <div className="prompt-dialog" role="dialog" aria-modal="true" aria-label={dialog.title}>
            <div className="prompt-header">{dialog.title}</div>
            <div className="prompt-body">{dialog.message}</div>
            <div className="prompt-actions">
              {dialog.type === "confirm" && (
                <button type="button" className="prompt-btn ghost" onClick={handleCancel}>
                  {dialog.cancelLabel}
                </button>
              )}
              <button type="button" className="prompt-btn primary" onClick={handleConfirm}>
                {dialog.confirmLabel}
              </button>
            </div>
          </div>
        </div>
      )}
      {toasts.length > 0 && (
        <div className="toast-stack" role="status" aria-live="polite">
          {toasts.map((item) => (
            <div key={item.id} className={`toast-item ${item.tone}`}>
              {item.message}
            </div>
          ))}
        </div>
      )}
    </PromptContext.Provider>
  );
};

export const usePrompt = () => {
  const context = useContext(PromptContext);
  if (!context) {
    throw new Error("usePrompt must be used within PromptProvider");
  }
  return context;
};
