export const qisValidationService = {
  // Validate required fields
  validateRequiredFields: (formData) => {
    const errors = [];
    const { meta, apis } = formData;

    // Meta validation
    if (!meta.brandName?.trim()) errors.push('Brand name is required');
    if (!meta.dci?.trim()) errors.push('Non-proprietary name (DCI) is required');
    if (!meta.dosageForm?.trim()) errors.push('Dosage form is required');
    if (!meta.strength?.trim()) errors.push('Strength is required');
    if (!meta.applicantName?.trim()) errors.push('Applicant name is required');
    if (!meta.submissionDate?.trim()) errors.push('Submission date is required');

    // API validation
    if (!apis || apis.length === 0) {
      errors.push('At least one API is required');
    } else {
      apis.forEach((api, index) => {
        if (!api.name?.trim()) errors.push(`API #${index + 1}: Name is required`);
      });
    }

    return errors;
  },

  // Validate date format
  validateDate: (dateString) => {
    if (!dateString) return false;
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;
    
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
  },

  // Validate email format
  validateEmail: (email) => {
    if (!email) return true; // Optional field
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  // Get completion percentage
  getCompletionPercentage: (formData) => {
    const totalFields = 20; // Approximate number of important fields
    let completedFields = 0;

    const { meta, apis, manufacturers, declarations } = formData;

    // Count completed meta fields
    if (meta.brandName?.trim()) completedFields++;
    if (meta.dci?.trim()) completedFields++;
    if (meta.dosageForm?.trim()) completedFields++;
    if (meta.strength?.trim()) completedFields++;
    if (meta.applicantName?.trim()) completedFields++;
    if (meta.submissionDate?.trim()) completedFields++;
    if (meta.manufacturerName?.trim()) completedFields++;

    // Count API completion
    if (apis && apis.length > 0 && apis[0].name?.trim()) completedFields += 3;

    // Count manufacturer completion
    if (manufacturers && manufacturers.length > 0 && manufacturers[0].name?.trim()) completedFields += 2;

    // Count declarations
    if (declarations.stabilityCommitment?.trim()) completedFields += 2;

    return Math.round((completedFields / totalFields) * 100);
  },

  // Get form status
  getFormStatus: (formData) => {
    const errors = qisValidationService.validateRequiredFields(formData);
    const completion = qisValidationService.getCompletionPercentage(formData);

    if (errors.length === 0 && completion >= 90) return 'complete';
    if (errors.length === 0 && completion >= 70) return 'nearly-complete';
    if (completion >= 50) return 'in-progress';
    return 'incomplete';
  }
};