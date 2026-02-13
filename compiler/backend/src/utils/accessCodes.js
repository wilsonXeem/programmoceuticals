import crypto from "crypto";

const normalizeCode = (value) => String(value || "").trim().toLowerCase();

const normalizeCodes = (codes) => {
  if (!Array.isArray(codes)) return [];
  return codes
    .map(normalizeCode)
    .filter((code) => /^[0-9a-f]{12}$/.test(code));
};

export function generateAccessCode() {
  return crypto.randomBytes(6).toString("hex");
}

export function generateAccessCodes(count) {
  const safeCount = Math.max(0, Math.floor(Number(count) || 0));
  return Array.from({ length: safeCount }, () => generateAccessCode());
}

export function getCurrentAccessCode(user) {
  const pending = normalizeCodes(user?.pendingAccessCodes);
  return pending[0] || null;
}

export function ensureAccessState(user) {
  let changed = false;

  const pending = normalizeCodes(user.pendingAccessCodes);
  const used = normalizeCodes(user.usedAccessCodes);
  const numericCredits = Math.max(0, Math.floor(Number(user.exportCredits) || 0));

  if (pending.length !== (user.pendingAccessCodes || []).length) {
    changed = true;
  }
  if (used.length !== (user.usedAccessCodes || []).length) {
    changed = true;
  }

  user.pendingAccessCodes = pending;
  user.usedAccessCodes = used;

  if (pending.length < numericCredits) {
    user.pendingAccessCodes.push(...generateAccessCodes(numericCredits - pending.length));
    changed = true;
  }

  const reconciledCredits = user.pendingAccessCodes.length;
  if (user.exportCredits !== reconciledCredits) {
    user.exportCredits = reconciledCredits;
    changed = true;
  }

  return changed;
}

export function queueAccessCodes(user, count) {
  const safeCount = Math.max(0, Math.floor(Number(count) || 0));
  if (safeCount === 0) return [];

  user.pendingAccessCodes = normalizeCodes(user.pendingAccessCodes);
  const generated = generateAccessCodes(safeCount);
  user.pendingAccessCodes.push(...generated);
  user.exportCredits = user.pendingAccessCodes.length;
  return generated;
}

export function trimPendingAccessCodes(user, count) {
  const safeCount = Math.max(0, Math.floor(Number(count) || 0));
  if (safeCount === 0) return 0;

  user.pendingAccessCodes = normalizeCodes(user.pendingAccessCodes);
  const removable = Math.min(safeCount, user.pendingAccessCodes.length);
  if (removable === 0) {
    user.exportCredits = user.pendingAccessCodes.length;
    return 0;
  }

  user.pendingAccessCodes.splice(user.pendingAccessCodes.length - removable, removable);
  user.exportCredits = user.pendingAccessCodes.length;
  return removable;
}

export function consumeAccessCode(user, submittedCode) {
  const submitted = normalizeCode(submittedCode);
  const pending = normalizeCodes(user.pendingAccessCodes);
  const used = normalizeCodes(user.usedAccessCodes);
  const current = pending[0] || null;

  user.pendingAccessCodes = pending;
  user.usedAccessCodes = used;

  if (!current) {
    user.exportCredits = 0;
    return { ok: false, reason: "no_credits", current: null };
  }

  if (!submitted) {
    user.exportCredits = pending.length;
    return { ok: false, reason: "missing_code", current };
  }

  if (submitted !== current) {
    user.exportCredits = pending.length;
    return { ok: false, reason: "mismatch_code", current };
  }

  const consumed = pending.shift();
  used.push(consumed);
  user.pendingAccessCodes = pending;
  user.usedAccessCodes = used;
  user.exportCredits = pending.length;

  return { ok: true, consumed, current: pending[0] || null };
}

export function toUserPayload(user) {
  return {
    id: user._id.toString(),
    email: user.email,
    username: user.username,
    phone: user.phone,
    whatsappNumber: user.whatsappNumber,
    tier: user.tier,
    export_credits: Number(user.exportCredits) || 0,
    access_code: getCurrentAccessCode(user)
  };
}
