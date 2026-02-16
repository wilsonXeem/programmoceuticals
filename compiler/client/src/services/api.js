const API_BASE =
  process.env.REACT_APP_API_URL || "https://compiler-server-bay.vercel.app";

export const apiFetch = async (path, { method = "GET", body, token, timeoutMs = 0 } = {}) => {
  const headers = { "Content-Type": "application/json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const safeTimeoutMs = Number(timeoutMs) || 0;
  const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
  const timeoutId =
    controller && safeTimeoutMs > 0
      ? setTimeout(() => {
          controller.abort();
        }, safeTimeoutMs)
      : null;

  let response;
  try {
    response = await fetch(`${API_BASE}${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
      signal: controller ? controller.signal : undefined
    });
  } catch (error) {
    const isTimeout = error?.name === "AbortError" && safeTimeoutMs > 0;
    const networkError = new Error(
      isTimeout
        ? "Request timed out. Please try again."
        : "Network connection is required to complete this action"
    );
    networkError.cause = error;
    throw networkError;
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = payload.error || "Request failed";
    const requestError = new Error(message);
    requestError.status = response.status;
    requestError.payload = payload;
    throw requestError;
  }

  return payload;
};
