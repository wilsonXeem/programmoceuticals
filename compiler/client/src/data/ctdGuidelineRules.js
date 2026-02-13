export const GUIDELINE_RULES = {
  global: {
    defaultFormat: 'PDF',
    enforceSearchablePdf: true,
    documentRequirements: [
      {
        id: 'english',
        label: 'Document is in English language.',
        appliesToFormats: 'all'
      },
      {
        id: 'searchablePdf',
        label: 'PDF is searchable (text-selectable).',
        appliesToFormats: ['pdf']
      },
      {
        id: 'references',
        label: 'References follow ICMJE format and use the latest editions.',
        appliesToFormats: 'all'
      },
      {
        id: 'acronyms',
        label: 'Acronyms are defined at first use within this document.',
        appliesToFormats: 'all'
      },
      {
        id: 'referenceSources',
        label: 'Relevant portions of reference sources are included where required.',
        appliesToFormats: 'all'
      },
      {
        id: 'validatedProcesses',
        label: 'Any in-house processes cited are validated with appropriate references.',
        appliesToFormats: 'all'
      }
    ]
  },
  sectionOverrides: {
    '1.4.2': {
      format: 'Word',
      allowedExtensions: ['doc', 'docx'],
      requiresFile: true,
      note: 'QIS must be submitted in Word format.'
    },
    '1.5': {
      format: 'Electronic Media',
      allowedExtensions: ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'zip'],
      requiresFile: true
    },
    '1.6': {
      format: 'Physical Samples',
      allowedExtensions: [],
      requiresFile: false,
      note: 'Physical samples are submitted outside the system.'
    }
  }
};
