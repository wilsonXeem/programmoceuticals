import { NAFDAC_REQUIREMENTS } from '../data/regulatoryRequirements';

const stripSuffix = (part) => part.split('__')[0];

export const mapRequirementsToNode = (nodePath, apiOption = null, requirementKey = null) => {
  // Extract the section ID from the path
  if (requirementKey && NAFDAC_REQUIREMENTS[requirementKey]) {
    return NAFDAC_REQUIREMENTS[requirementKey];
  }

  const pathParts = nodePath.split('/').filter(part => part !== '').map(stripSuffix);
  
  // Try different approaches to find requirements
  let requirement = null;
  
  // 1. Try the last part of the path (e.g., "/ctd/module1/1.0" -> "1.0")
  const lastPart = pathParts[pathParts.length - 1];
  requirement = NAFDAC_REQUIREMENTS[lastPart];
  
  // 2. If not found, try the second-to-last part (for nested folders)
  if (!requirement && pathParts.length > 1) {
    const secondLast = pathParts[pathParts.length - 2];
    requirement = NAFDAC_REQUIREMENTS[secondLast];
  }
  
  // 3. Try combinations for nested paths (e.g., "3.2.S.1")
  if (!requirement && pathParts.length > 2) {
    for (let i = pathParts.length - 1; i >= 0; i--) {
      const combinedId = pathParts.slice(i).join('.');
      requirement = NAFDAC_REQUIREMENTS[combinedId];
      if (requirement) break;
    }
  }
  
  // 4. Special handling for module paths
  if (!requirement) {
    const moduleMatch = nodePath.match(/module(\d+)/i);
    if (moduleMatch) {
      requirement = NAFDAC_REQUIREMENTS[`module${moduleMatch[1]}`];
    }
  }
  
  if (apiOption && requirement?.apiOptions?.length) {
    if (!requirement.apiOptions.includes("all") && !requirement.apiOptions.includes(apiOption)) {
      return null;
    }
  }

  if (!requirement) {
    return null;
  }

  if (apiOption && Array.isArray(requirement.requiredForOptions)) {
    return {
      ...requirement,
      mandatory: requirement.requiredForOptions.includes(apiOption)
    };
  }

  return requirement;
};

export const getRequirementsBySectionId = (sectionId) => {
  return NAFDAC_REQUIREMENTS[sectionId] || null;
};
