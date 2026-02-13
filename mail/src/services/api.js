const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const apiFetch = async (path, { method = "GET", body, token } = {}) => {
  const headers = { "Content-Type": "application/json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let response;
  try {
    response = await fetch(`${API_BASE}${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined
    });
  } catch (error) {
    const networkError = new Error("Network connection is required to complete this action");
    networkError.cause = error;
    throw networkError;
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
