import { GUIDELINE_RULES } from '../data/ctdGuidelineRules';

const stripSuffix = (part) => part.split('__')[0];

const getSectionId = (nodePath, requirementKey = null) => {
  if (requirementKey) return requirementKey;
  const pathParts = nodePath.split('/').filter(part => part !== '').map(stripSuffix);
  return pathParts[pathParts.length - 1] || '';
};

const normalizeFormat = (format) => String(format || '').toLowerCase();

const formatToExtensions = (format) => {
  const normalized = normalizeFormat(format);
  const extensions = new Set();

  if (normalized.includes('pdf')) {
    extensions.add('pdf');
  }
  if (normalized.includes('word')) {
    extensions.add('doc');
    extensions.add('docx');
  }
  if (normalized.includes('excel')) {
    extensions.add('xls');
    extensions.add('xlsx');
  }
  if (normalized.includes('zip')) {
    extensions.add('zip');
  }

  if (normalized.includes('electronic media')) {
    ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'zip'].forEach((ext) => extensions.add(ext));
  }

  return Array.from(extensions);
};

const getFileExtension = (fileName) => {
  const parts = String(fileName || '').toLowerCase().split('.');
  if (parts.length < 2) return '';
  return parts.pop();
};

const requirementAppliesToFormat = (requirement, format) => {
  if (!requirement) return false;
  if (requirement.appliesToFormats === 'all') return true;
  if (Array.isArray(requirement.appliesToFormats)) {
    return requirement.appliesToFormats.includes(format);
  }
  return false;
};

export const getDocumentRequirements = ({ fileName, rules }) => {
  const extension = getFileExtension(fileName);
  return (GUIDELINE_RULES.global.documentRequirements || []).filter((requirement) =>
    requirementAppliesToFormat(requirement, extension)
  );
};

export const getSectionRules = (nodePath, requirement, requirementKey = null) => {
  const sectionId = getSectionId(nodePath, requirementKey);
  const override = GUIDELINE_RULES.sectionOverrides[sectionId] || {};
  const format = override.format || requirement?.format || GUIDELINE_RULES.global.defaultFormat;
  const allowedExtensions = override.allowedExtensions || formatToExtensions(format);
  const requiresFile = override.requiresFile !== undefined ? override.requiresFile : true;

  return {
    sectionId,
    format,
    allowedExtensions,
    requiresFile,
    note: override.note || null
  };
};

export const validateFileForSection = ({ file, nodePath, requirement, requirementKey = null }) => {
  const rules = getSectionRules(nodePath, requirement, requirementKey);
  const extension = getFileExtension(file?.name);

  if (!rules.requiresFile && rules.allowedExtensions.length === 0) {
    return {
      ok: false,
      message: `This section accepts ${rules.format} only and does not store files.`
    };
  }

  if (rules.allowedExtensions.length > 0 && !rules.allowedExtensions.includes(extension)) {
    return {
      ok: false,
      message: `Invalid file format. Required: ${rules.format}.`
    };
  }

  return { ok: true, message: '' };
};

export const validateDocumentAttestations = ({ fileName, rules, attestations }) => {
  const requirements = getDocumentRequirements({ fileName, rules });
  const missing = requirements.filter((req) => !attestations?.[req.id]);

  if (missing.length > 0) {
    return {
      ok: false,
      message: 'Confirm all document-level requirements before saving.'
    };
  }

  return { ok: true, message: '' };
};

export const validateExportReadiness = ({ allFiles, uploadedFiles, requirementResolver }) => {
  const errors = [];

  allFiles.forEach((fileNode) => {
    const requirement = requirementResolver(fileNode);
    const rules = getSectionRules(fileNode.path, requirement, fileNode.requirementKey);
    const uploaded = uploadedFiles.get(fileNode.path);
    const isRequired = requirement?.mandatory && rules.requiresFile;

    if (isRequired && !uploaded) {
      errors.push(`Missing required document: ${fileNode.name}`);
      return;
    }

    if (uploaded && rules.allowedExtensions.length > 0) {
      const extension = getFileExtension(uploaded.name);
      if (!rules.allowedExtensions.includes(extension)) {
        errors.push(`Invalid format for ${fileNode.name}. Required: ${rules.format}.`);
      }
    }

    if (uploaded) {
      const attestationCheck = validateDocumentAttestations({
        fileName: uploaded.name,
        rules,
        attestations: uploaded.attestations
      });
      if (!attestationCheck.ok) {
        errors.push(`Missing document confirmations for ${fileNode.name}.`);
      }
    }
  });

  return errors;
};
