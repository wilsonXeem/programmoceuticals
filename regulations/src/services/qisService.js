/**
 * QIS Service - Quality Information Summary management
 * Handles QIS document generation, upload, and data processing
 */

class QISService {
  constructor() {
    this.storageKey = 'qis_documents';
  }

  /**
   * Save QIS data to localStorage
   */
  saveQISData(qisData) {
    try {
      const savedData = {
        ...qisData,
        lastModified: new Date().toISOString(),
        version: qisData.version || '1.0'
      };
      localStorage.setItem(this.storageKey, JSON.stringify(savedData));
      return { success: true, data: savedData };
    } catch (error) {
      console.error('Error saving QIS data:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Load QIS data from localStorage
   */
  loadQISData() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error loading QIS data:', error);
      return null;
    }
  }

  /**
   * Export QIS data as JSON file
   */
  exportQISAsJSON(qisData, filename) {
    try {
      const dataStr = JSON.stringify(qisData, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = filename || `QIS_${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      return { success: true };
    } catch (error) {
      console.error('Error exporting QIS:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Import QIS data from uploaded JSON file
   */
  async importQISFromJSON(file) {
    return new Promise((resolve) => {
      if (!file || file.type !== 'application/json') {
        resolve({ success: false, error: 'Please select a valid JSON file' });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const qisData = JSON.parse(e.target.result);
          
          // Validate QIS structure
          const validation = this.validateQISStructure(qisData);
          if (!validation.isValid) {
            resolve({ success: false, error: validation.error });
            return;
          }

          resolve({ success: true, data: qisData });
        } catch (error) {
          resolve({ success: false, error: 'Invalid JSON format' });
        }
      };
      
      reader.onerror = () => {
        resolve({ success: false, error: 'Error reading file' });
      };
      
      reader.readAsText(file);
    });
  }

  /**
   * Validate QIS data structure
   */
  validateQISStructure(qisData) {
    const requiredFields = ['meta', 'productSummary'];
    const optionalFields = ['apis', 'manufacturers', 'containerClosures', 'batchFormulas', 'stabilityRows', 'analyticalMethods', 'batchAnalyses', 'revisionHistory', 'declarations'];
    
    // Check required fields
    for (const field of requiredFields) {
      if (!qisData.hasOwnProperty(field)) {
        return { isValid: false, error: `Missing required field: ${field}` };
      }
    }

    // Validate meta structure
    if (!qisData.meta || typeof qisData.meta !== 'object') {
      return { isValid: false, error: 'Invalid meta data structure' };
    }

    return { isValid: true };
  }

  /**
   * Generate QIS template with default values
   */
  generateQISTemplate() {
    return {
      meta: {
        applicationType: "",
        nmraNumber: "",
        submissionDate: new Date().toISOString().split('T')[0],
        brandName: "",
        dci: "",
        dosageForm: "",
        strength: "",
        manufacturerName: "",
        applicantName: "",
        numberOfSamples: ""
      },
      productSummary: {
        smpcVersion: "",
        labellingVersion: "",
        pilVersion: ""
      },
      apis: [{
        id: 1,
        name: "",
        compendialName: "",
        cas: "",
        structure: "",
        molecularFormula: "",
        molecularWeight: "",
        physicalDescription: "",
        solubilityProfile: [
          { ph: "1.2", solMgPerMl: "" },
          { ph: "4.5", solMgPerMl: "" },
          { ph: "6.8", solMgPerMl: "" }
        ],
        doseSolubilityVolumeCalc: {
          largestStrengthMg: "",
          minConcentrationMgPerMl: "",
          resultMl: ""
        },
        polymorphism: "",
        particleSizeDistribution: { d10: "", d50: "", d90: "" }
      }],
      manufacturers: [{
        id: 1,
        name: "",
        address: "",
        responsibility: "",
        site: "",
        gmpCertificate: "",
        manufacturingAuthorization: ""
      }],
      containerClosures: [{
        id: 1,
        component: "Primary",
        material: "",
        specification: "",
        suitabilityRemarks: ""
      }],
      batchFormulas: [{
        id: 1,
        batchSize: "",
        batchFormulaText: ""
      }],
      stabilityRows: [
        { id: 1, condition: "Accelerated (40 ± 2 °C / 75 ± 5% RH)", months: "6", observations: "" },
        { id: 2, condition: "Long-term (30 ± 2 °C / 75 ± 5% RH)", months: "6", observations: "" }
      ],
      analyticalMethods: [
        { id: 1, name: "Assay (HPLC)", purpose: "Assay", reference: "", validated: "No" },
        { id: 2, name: "Related Substances (HPLC)", purpose: "Impurities", reference: "", validated: "No" }
      ],
      batchAnalyses: [{
        id: 1,
        batchNo: "",
        batchSize: "",
        site: "",
        strength: "",
        testsSummary: ""
      }],
      revisionHistory: [{
        id: 1,
        date: "",
        version: "1.0",
        summaryOfChange: "Initial version",
        author: ""
      }],
      declarations: {
        notarizedDeclaration: "",
        stabilityCommitment: "",
        ongoingStability: ""
      },
      version: "1.0",
      createdAt: new Date().toISOString()
    };
  }

  /**
   * Auto-save QIS data (debounced)
   */
  autoSave(qisData) {
    if (this.autoSaveTimeout) {
      clearTimeout(this.autoSaveTimeout);
    }
    
    this.autoSaveTimeout = setTimeout(() => {
      this.saveQISData(qisData);
    }, 2000); // Auto-save after 2 seconds of inactivity
  }

  /**
   * Clear auto-save timeout
   */
  clearAutoSave() {
    if (this.autoSaveTimeout) {
      clearTimeout(this.autoSaveTimeout);
    }
  }

  /**
   * Generate QIS completion percentage
   */
  calculateCompletionPercentage(qisData) {
    if (!qisData) return 0;

    const sections = [
      { name: 'meta', weight: 20, data: qisData.meta },
      { name: 'productSummary', weight: 10, data: qisData.productSummary },
      { name: 'apis', weight: 25, data: qisData.apis },
      { name: 'manufacturers', weight: 15, data: qisData.manufacturers },
      { name: 'stabilityRows', weight: 15, data: qisData.stabilityRows },
      { name: 'declarations', weight: 15, data: qisData.declarations }
    ];

    let totalScore = 0;
    let totalWeight = 0;

    sections.forEach(section => {
      totalWeight += section.weight;
      
      if (section.data) {
        const sectionScore = this.calculateSectionCompleteness(section.data);
        totalScore += (sectionScore * section.weight) / 100;
      }
    });

    return Math.round((totalScore / totalWeight) * 100);
  }

  /**
   * Calculate section completeness
   */
  calculateSectionCompleteness(sectionData) {
    if (!sectionData) return 0;

    if (Array.isArray(sectionData)) {
      if (sectionData.length === 0) return 0;
      
      const itemScores = sectionData.map(item => this.calculateObjectCompleteness(item));
      return itemScores.reduce((sum, score) => sum + score, 0) / itemScores.length;
    }

    return this.calculateObjectCompleteness(sectionData);
  }

  /**
   * Calculate object field completeness
   */
  calculateObjectCompleteness(obj) {
    if (!obj || typeof obj !== 'object') return 0;

    const fields = Object.values(obj);
    const filledFields = fields.filter(value => {
      if (typeof value === 'string') return value.trim() !== '';
      if (typeof value === 'number') return value !== 0;
      if (Array.isArray(value)) return value.length > 0;
      if (typeof value === 'object' && value !== null) return Object.keys(value).length > 0;
      return value != null;
    });

    return fields.length > 0 ? (filledFields.length / fields.length) * 100 : 0;
  }
}

export const qisService = new QISService();
export default qisService;