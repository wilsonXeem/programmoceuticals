// Sample CTD Module Form Configurations

export const ctdModuleConfigs = {
  // Module 1.2.1 - Application Letter
  applicationLetter: {
    id: 'application_letter',
    title: 'Module 1.2.1 - Application Letter',
    description: 'Complete the application letter with required company and product information.',
    fields: [
      {
        id: 'company_name',
        type: 'text',
        label: 'Company Name',
        required: true,
        placeholder: 'Enter your company name'
      },
      {
        id: 'company_address',
        type: 'textarea',
        label: 'Company Address',
        required: true,
        rows: 3,
        placeholder: 'Enter complete company address'
      },
      {
        id: 'contact_email',
        type: 'email',
        label: 'Contact Email',
        required: true,
        placeholder: 'contact@company.com'
      },
      {
        id: 'product_name',
        type: 'text',
        label: 'Product Name',
        required: true,
        placeholder: 'Enter product name'
      },
      {
        id: 'application_type',
        type: 'select',
        label: 'Application Type',
        required: true,
        options: [
          { value: 'new', label: 'New Product Registration' },
          { value: 'variation', label: 'Variation Application' },
          { value: 'renewal', label: 'Renewal Application' }
        ]
      },
      {
        id: 'application_letter_file',
        type: 'file',
        label: 'Application Letter Document',
        required: true,
        acceptedTypes: ['.pdf', '.doc', '.docx'],
        maxFileSize: 10 * 1024 * 1024
      },
      {
        id: 'declaration',
        type: 'checkbox',
        label: 'Declaration',
        required: true,
        checkboxLabel: 'I declare that all information provided is accurate and complete'
      }
    ]
  },

  // Module 1.2.2 - Registration Form
  registrationForm: {
    id: 'registration_form',
    title: 'Module 1.2.2 - Registration Form',
    description: 'Complete the product registration form with detailed product specifications.',
    fields: [
      {
        id: 'dosage_form',
        type: 'select',
        label: 'Dosage Form',
        required: true,
        options: [
          { value: 'tablet', label: 'Tablet' },
          { value: 'capsule', label: 'Capsule' },
          { value: 'syrup', label: 'Syrup' },
          { value: 'injection', label: 'Injection' },
          { value: 'cream', label: 'Cream' },
          { value: 'ointment', label: 'Ointment' }
        ]
      },
      {
        id: 'strength',
        type: 'text',
        label: 'Strength',
        required: true,
        placeholder: 'e.g., 500mg, 10mg/ml'
      },
      {
        id: 'pack_size',
        type: 'text',
        label: 'Pack Size',
        required: true,
        placeholder: 'e.g., 10 tablets, 100ml bottle'
      },
      {
        id: 'therapeutic_class',
        type: 'select',
        label: 'Therapeutic Classification',
        required: true,
        options: [
          { value: 'analgesic', label: 'Analgesic' },
          { value: 'antibiotic', label: 'Antibiotic' },
          { value: 'antihypertensive', label: 'Antihypertensive' },
          { value: 'antidiabetic', label: 'Antidiabetic' },
          { value: 'other', label: 'Other' }
        ]
      },
      {
        id: 'registration_form_file',
        type: 'file',
        label: 'Completed Registration Form',
        required: true,
        acceptedTypes: ['.pdf'],
        maxFileSize: 5 * 1024 * 1024
      }
    ]
  },

  // Module 3.2.P.1 - Description and Composition
  productComposition: {
    id: 'product_composition',
    title: 'Module 3.2.P.1 - Description and Composition of FPP',
    description: 'Provide detailed composition and description of the finished pharmaceutical product.',
    fields: [
      {
        id: 'product_description',
        type: 'textarea',
        label: 'Product Description',
        required: true,
        rows: 4,
        placeholder: 'Describe the physical appearance, color, shape, etc.'
      },
      {
        id: 'active_ingredient',
        type: 'text',
        label: 'Active Pharmaceutical Ingredient (API)',
        required: true,
        placeholder: 'Enter API name and strength'
      },
      {
        id: 'excipients',
        type: 'textarea',
        label: 'Excipients List',
        required: true,
        rows: 6,
        placeholder: 'List all excipients with their functions and quantities',
        helpText: 'Include all inactive ingredients with their respective quantities per unit dose'
      },
      {
        id: 'composition_table',
        type: 'file',
        label: 'Detailed Composition Table',
        required: true,
        acceptedTypes: ['.pdf', '.xlsx', '.docx'],
        maxFileSize: 5 * 1024 * 1024
      },
      {
        id: 'batch_formula',
        type: 'file',
        label: 'Batch Formula',
        required: false,
        acceptedTypes: ['.pdf', '.xlsx'],
        maxFileSize: 5 * 1024 * 1024
      }
    ]
  }
};

export const getModuleConfig = (moduleId) => {
  return ctdModuleConfigs[moduleId] || null;
};