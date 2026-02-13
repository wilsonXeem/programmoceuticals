export function filterModules(data, allowedModules) {
  if (!data || typeof data !== "object") {
    return data;
  }

  const allowed = new Set(allowedModules);
  const filtered = {};

  for (const [key, value] of Object.entries(data)) {
    const segments = key.split("/");
    const moduleSegment = segments.find((segment) => segment.startsWith("module"));
    const numericSegment = segments.find((segment) => /^\d/.test(segment));
    if (moduleSegment && allowed.has(moduleSegment)) {
      filtered[key] = value;
      continue;
    }
    if (!moduleSegment && numericSegment && allowed.has(numericSegment.split(".")[0])) {
      filtered[key] = value;
    }
  }

  return filtered;
}
