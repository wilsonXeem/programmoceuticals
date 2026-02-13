// Five Plus Five Year Validity Policy - Local Manufacturing Only Products
// Instituted March 2019, Published May 1, 2019
// 29 products that can only be registered as locally manufactured Pharmaceuticals
export const FIVE_PLUS_FIVE_PRODUCTS = [
  { id: 1, activeIngredient: "ALBENDAZOLE", dosageForm: "400mg & 200mg Tablets" },
  { id: 2, activeIngredient: "ALLIUM SATIVUM", dosageForm: "Capsule/Tablet" },
  { id: 3, activeIngredient: "ALOE VERA", dosageForm: "Capsule" },
  { id: 4, activeIngredient: "AMPICILLIN", dosageForm: "125mg/5ml & 250mg/5ml powder for reconstitution" },
  { id: 5, activeIngredient: "AMPICILLIN", dosageForm: "250mg Dispersible Tablets" },
  { id: 6, activeIngredient: "ANTACID", dosageForm: "Tablet/Suspension (containing either Magnesium OH, Aluminium, Simethicon/Malgradate)" },
  { id: 7, activeIngredient: "AZADIRAACHTA INDICA", dosageForm: "Capsule/Tablet" },
  { id: 8, activeIngredient: "CHLORAMPHENICOL", dosageForm: "250mg Capsule" },
  { id: 9, activeIngredient: "CHLORHEXIDINE", dosageForm: "7.1% Gel" },
  { id: 10, activeIngredient: "CHLORPHENIRAMINE MALEATE", dosageForm: "4mg Tablets" },
  { id: 11, activeIngredient: "CIMETIDINE", dosageForm: "200mg & 400mg Tablets" },
  { id: 12, activeIngredient: "CIPROFLOXACIN", dosageForm: "250mg & 500mg Tablets" },
  { id: 13, activeIngredient: "DICLOFENAC SODIUM & DICLOFENAC POTASSIUM", dosageForm: "50mg & 100mg Tablets" },
  { id: 14, activeIngredient: "GARCINA KOLA", dosageForm: "Liquid/Capsule" },
  { id: 15, activeIngredient: "HYDROCHLOROTHIAZIDE", dosageForm: "Tablets" },
  { id: 16, activeIngredient: "LOW OSMOLARITY ORAL REHYDRATION SALTS", dosageForm: "Powder" },
  { id: 17, activeIngredient: "MORINGA OLEIFERA", dosageForm: "Powder" },
  { id: 18, activeIngredient: "NYSTATIN", dosageForm: "100,000 unit/ml Syrup/Drop" },
  { id: 19, activeIngredient: "OMEPRAZOLE", dosageForm: "10mg & 20mg Capsule" },
  { id: 20, activeIngredient: "PARACETAMOL & CAFFEINE", dosageForm: "Fixed dose combination Tablets" },
  { id: 21, activeIngredient: "PIROXICAM", dosageForm: "20mg Capsule" },
  { id: 22, activeIngredient: "SHEA BUTTER", dosageForm: "Cream" },
  { id: 23, activeIngredient: "TOPICAL BENZYL BENZOATE PREPARATIONS", dosageForm: "Emulsions" },
  { id: 24, activeIngredient: "TOPICAL PRODUCTS CONTAINING SALICYCLIC ACID", dosageForm: "Creams" },
  { id: 25, activeIngredient: "TOPICAL SULPHUR OINTMENT", dosageForm: "Ointment" },
  { id: 26, activeIngredient: "VERNONIA AMYGDALINA", dosageForm: "Capsule/Tablet" },
  { id: 27, activeIngredient: "VITAMIN C", dosageForm: "Syrup/Drop" },
  { id: 28, activeIngredient: "VITAMIN C", dosageForm: "Tablets (all strengths)" },
  { id: 29, activeIngredient: "ZINGIBER OFFINALE", dosageForm: "Capsule/Tablet" }
];

export const checkFivePlusFivePolicy = (productName, activeIngredient = "") => {
  const searchTerms = [productName, activeIngredient].filter(Boolean).map(term => term.toLowerCase());
  
  return FIVE_PLUS_FIVE_PRODUCTS.find(item => {
    const ingredient = item.activeIngredient.toLowerCase();
    return searchTerms.some(term => 
      ingredient.includes(term) || term.includes(ingredient.split(/[/+\s]/)[0])
    );
  });
};