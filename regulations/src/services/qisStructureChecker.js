// QIS Structure Checker Service
// Validates QIS documents against NAFDAC approved template structure

export const QIS_REQUIRED_SECTIONS = [
  {
    id: 'introduction',
    title: 'INTRODUCTION',
    subsections: [
      'Summary of product information',
      'Administrative Summary'
    ],
    required: true
  },
  {
    id: 'drug_substance',
    title: '2.3. S DRUG SUBSTANCE (or ACTIVE PHARMACEUTICAL INGREDIENT (API))',
    subsections: [
      '2.3. S.2 Manufacture',
      '2.3. S.2.1 Manufacturer(s)',
      '2.3. S.2.3 Control of Materials',
      '2.3. S.4 Control of the API',
      '2.3. S.4.1 Specification',
      '2.3. S.6 Container Closure System',
      '2.3. S.7 Stability',
      '2.3. S.7.1 Stability Summary and Conclusions'
    ],
    required: true
  },
  {
    id: 'drug_product',
    title: '2.3. P DRUG PRODUCT (or FINISHED PHARMACEUTICAL PRODUCT (FPP))',
    subsections: [
      '2.3. P.1 Description and Composition of the FPP',
      '2.3. P.2.2.1 Formulation Development',
      '2.3. P.3 Manufacture',
      '2.3. P.3.1 Manufacturer(s)',
      '2.3. P.3.2 Batch Formula',
      '2.3. P.3.3 Description of Manufacturing Process and Process Controls',
      '2.3. P.3.4 Controls of Critical Steps and Intermediates',
      '2.3. P.3.5 Process Validation and/or Evaluation',
      '2.3. P.5 Control of FPP',
      '2.3. P.5.1 Specification(s)',
      '2.3. P.7 Container Closure System',
      '2.3. P.8 Stability',
      '2.3. P.8.1 Stability Summary and Conclusions',
      '2.3. P.8.2 Post-approval Stability Protocol and Stability Commitment',
      '2.3. P.8.3 Stability Data'
    ],
    required: true
  },
  {
    id: 'commitments',
    title: 'WRITTEN COMMITMENTS OF THE MANUFACTURER',
    subsections: [
      'API commitments',
      'FPP commitments',
      'Change History'
    ],
    required: true
  }
];

export const checkQISStructure = async (fileBlob, fileName) => {
  try {
    // Add timeout and size check
    if (fileBlob.size > 50 * 1024 * 1024) { // 50MB limit
      throw new Error('File too large. QIS document should be under 50MB.');
    }

    const text = await Promise.race([
      extractTextFromFile(fileBlob, fileName),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Text extraction timeout after 30 seconds')), 30000)
      )
    ]);

    const results = {
      isCompliant: false,
      completeness: 0,
      foundSections: [],
      missingSections: [],
      details: {}
    };

    let foundCount = 0;
    const totalRequired = QIS_REQUIRED_SECTIONS.length;

    for (const section of QIS_REQUIRED_SECTIONS) {
      const sectionFound = checkSectionPresence(text, section);
      
      if (sectionFound.found) {
        foundCount++;
        results.foundSections.push({
          title: section.title,
          subsections: sectionFound.foundSubsections
        });
      } else {
        results.missingSections.push({
          title: section.title,
          missingSubsections: sectionFound.missingSubsections
        });
      }
      
      results.details[section.id] = sectionFound;
    }

    results.completeness = Math.round((foundCount / totalRequired) * 100);
    results.isCompliant = results.completeness >= 90;

    return results;
  } catch (error) {
    console.error('QIS structure check error:', error);
    return {
      isCompliant: false,
      completeness: 0,
      foundSections: [],
      missingSections: [],
      error: error.message
    };
  }
};

const extractTextFromFile = async (fileBlob, fileName) => {
  const fileExtension = fileName.toLowerCase().split('.').pop();
  
  if (fileExtension === 'docx') {
    try {
      const mammoth = await import('mammoth');
      const arrayBuffer = await fileBlob.arrayBuffer();
      // Use faster raw text extraction with minimal options
      const result = await mammoth.extractRawText({ 
        arrayBuffer,
        // Skip images and complex formatting for speed
        convertImage: mammoth.images.ignoreAll
      });
      return result.value;
    } catch (error) {
      // Fallback to basic text extraction if mammoth fails
      console.warn('Mammoth extraction failed, using fallback:', error.message);
      return await fileBlob.text();
    }
  } else if (fileExtension === 'doc') {
    // For .doc files, use basic text extraction
    return await fileBlob.text();
  } else {
    throw new Error('Unsupported file format. QIS must be in Word format (.doc or .docx)');
  }
};

const checkSectionPresence = (text, section) => {
  // Pre-normalize text once for efficiency
  const normalizedText = text.toLowerCase();
  
  // Simplified title check - just look for key parts
  const titleKey = section.title.toLowerCase().replace(/[^a-z0-9]/g, '');
  const titleFound = normalizedText.replace(/[^a-z0-9]/g, '').includes(titleKey.slice(0, 20));

  // Quick subsection check - only check first few characters of each
  const foundSubsections = [];
  const missingSubsections = [];

  section.subsections.forEach(subsection => {
    const key = subsection.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 15);
    
    if (normalizedText.replace(/[^a-z0-9]/g, '').includes(key)) {
      foundSubsections.push(subsection);
    } else {
      missingSubsections.push(subsection);
    }
  });

  return {
    found: titleFound && foundSubsections.length >= Math.ceil(section.subsections.length * 0.6),
    titleFound,
    foundSubsections,
    missingSubsections,
    completeness: Math.round((foundSubsections.length / section.subsections.length) * 100)
  };
};

// Add progress callback for UI feedback
export const checkQISStructureWithProgress = async (fileBlob, fileName, onProgress) => {
  onProgress?.('Extracting text from document...');
  const text = await extractTextFromFile(fileBlob, fileName);
  
  onProgress?.('Analyzing document structure...');
  return await checkQISStructure(fileBlob, fileName);
};

export default { checkQISStructure, checkQISStructureWithProgress, QIS_REQUIRED_SECTIONS };