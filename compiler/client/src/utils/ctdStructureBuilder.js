const deepClone = (value) => JSON.parse(JSON.stringify(value));

const clampCount = (value, min = 1) => {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return min;
  return Math.max(min, Math.floor(parsed));
};

const getCount = (value, { allowZero = false } = {}) => {
  if (allowZero) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) return 0;
    return Math.max(0, Math.floor(parsed));
  }
  return clampCount(value, 1);
};

const replacePathSegment = (path, fromSegment, toSegment) => {
  return path.replace(`/${fromSegment}`, `/${toSegment}`);
};

const replacePathPrefix = (path, fromPrefix, toPrefix) => {
  if (!path.startsWith(fromPrefix)) return path;
  return `${toPrefix}${path.slice(fromPrefix.length)}`;
};

const updatePaths = (node, fromSegment, toSegment) => {
  node.path = replacePathSegment(node.path, fromSegment, toSegment);
  if (node.children) {
    node.children.forEach((child) => updatePaths(child, fromSegment, toSegment));
  }
};

const updatePrefix = (node, fromPrefix, toPrefix) => {
  node.path = replacePathPrefix(node.path, fromPrefix, toPrefix);
  if (node.children) {
    node.children.forEach((child) => updatePrefix(child, fromPrefix, toPrefix));
  }
};

const findNodeByPath = (node, targetPath) => {
  if (node.path === targetPath) return node;
  if (!node.children) return null;
  for (const child of node.children) {
    const match = findNodeByPath(child, targetPath);
    if (match) return match;
  }
  return null;
};

const buildDrugSubstanceSections = (template, profile) => {
  const apiCount = getCount(profile.apiCount);
  const manufacturerCount = getCount(profile.apiManufacturerCount);
  const variants = [];

  for (let apiIndex = 0; apiIndex < apiCount; apiIndex += 1) {
    for (let manufacturerIndex = 0; manufacturerIndex < manufacturerCount; manufacturerIndex += 1) {
      variants.push({
        apiIndex,
        manufacturerIndex
      });
    }
  }

  if (variants.length <= 1) {
    return [deepClone(template)];
  }

  return variants.map((variant) => {
    const clone = deepClone(template);
    const baseSegment = template.path.split('/').pop();
    const suffix = `__api${variant.apiIndex + 1}__mfr${variant.manufacturerIndex + 1}`;
    const labeledName = `${template.name} (API ${variant.apiIndex + 1}, Manufacturer ${variant.manufacturerIndex + 1})`;
    const updatedSegment = `${baseSegment}${suffix}`;

    clone.name = labeledName;
    clone.requirementKey = baseSegment;
    updatePaths(clone, baseSegment, updatedSegment);
    return clone;
  });
};

const buildFinishedProductSections = (template, profile) => {
  const strengthCount = getCount(profile.strengthCount);
  const closureCount = getCount(profile.containerClosureCount);
  const coBlisteredCount = getCount(profile.coBlisteredCount, { allowZero: true });
  const diluentCount = getCount(profile.diluentCount, { allowZero: true });

  const variants = [];
  const coBlisteredIterations = coBlisteredCount > 0 ? coBlisteredCount : 1;

  for (let coIndex = 0; coIndex < coBlisteredIterations; coIndex += 1) {
    for (let strengthIndex = 0; strengthIndex < strengthCount; strengthIndex += 1) {
      for (let closureIndex = 0; closureIndex < closureCount; closureIndex += 1) {
        const labelParts = [];
        if (coBlisteredCount > 0) labelParts.push(`Co-blistered ${coIndex + 1}`);
        if (strengthCount > 1) labelParts.push(`Strength ${strengthIndex + 1}`);
        if (closureCount > 1) labelParts.push(`Container ${closureIndex + 1}`);
        variants.push({
          label: labelParts.join(', '),
          suffixParts: [
            coBlisteredCount > 0 ? `cb${coIndex + 1}` : null,
            strengthCount > 1 ? `s${strengthIndex + 1}` : null,
            closureCount > 1 ? `c${closureIndex + 1}` : null
          ].filter(Boolean)
        });
      }
    }
  }

  const sections = variants.map((variant, index) => {
    const clone = deepClone(template);
    if (variant.label) {
      clone.name = `${template.name} (${variant.label})`;
    }
    if (variants.length > 1) {
      const baseSegment = template.path.split('/').pop();
      const suffixLabel = variant.suffixParts.length > 0 ? variant.suffixParts.join('_') : `variant-${index + 1}`;
      const updatedSegment = `${baseSegment}__${suffixLabel}`;
      clone.requirementKey = baseSegment;
      updatePaths(clone, baseSegment, updatedSegment);
    }
    return clone;
  });

  if (diluentCount === 0) return sections;

  const diluentClone = deepClone(template);
  const baseSegment = template.path.split('/').pop();
  const suffix = '__diluent';
  diluentClone.name = `${template.name} (Diluents x${diluentCount})`;
  diluentClone.requirementKey = baseSegment;
  updatePaths(diluentClone, baseSegment, `${baseSegment}${suffix}`);
  sections.push(diluentClone);

  return sections;
};

const applyModule3Overrides = (structure, profile) => {
  const module3Path = `${structure.path}/module3`;
  const module3 = findNodeByPath(structure, module3Path);
  if (!module3 || !module3.children) return;

  const bodyOfDataContainer = module3.children.find(
    (child) => child.path.endsWith('/3.2') && Array.isArray(child.children)
  );
  const module3Body = bodyOfDataContainer || module3;
  if (!module3Body.children) return;

  const drugSubstanceTemplate = module3Body.children.find((child) => child.path.endsWith('/3.2.S'));
  const finishedProductTemplate = module3Body.children.find((child) => child.path.endsWith('/3.2.P'));

  if (!drugSubstanceTemplate || !finishedProductTemplate) return;

  const drugSubstanceSections = buildDrugSubstanceSections(drugSubstanceTemplate, profile);
  const finishedProductSections = buildFinishedProductSections(finishedProductTemplate, profile);

  const updatedChildren = [];
  module3Body.children.forEach((child) => {
    if (child.path.endsWith('/3.2.S')) {
      updatedChildren.push(...drugSubstanceSections);
    } else if (child.path.endsWith('/3.2.P')) {
      updatedChildren.push(...finishedProductSections);
    } else {
      updatedChildren.push(child);
    }
  });

  module3Body.children = updatedChildren;
};

const buildDossierStructure = (baseStructure, profile, rootPath, rootName) => {
  const clone = deepClone(baseStructure);
  if (rootPath && clone.path !== rootPath) {
    const oldRoot = clone.path;
    clone.path = rootPath;
    clone.name = rootName || clone.name;
    if (clone.children) {
      clone.children.forEach((child) => updatePrefix(child, oldRoot, rootPath));
    }
  }
  applyModule3Overrides(clone, profile);
  return clone;
};

export const buildCtdStructure = (baseStructure, profile) => {
  const fppCount = getCount(profile.fppCount, { allowZero: true });

  if (fppCount > 1) {
    const root = deepClone(baseStructure);
    root.name = 'CTD Dossier Set';
    root.children = Array.from({ length: fppCount }, (_, index) => {
      const rootPath = `/ctd/fpp-${index + 1}`;
      const dossierName = `FPP ${index + 1}`;
      return buildDossierStructure(baseStructure, profile, rootPath, dossierName);
    });
    return root;
  }

  return buildDossierStructure(baseStructure, profile);
};
