// NAFDAC Import Prohibition List - Updated Official List
export const IMPORT_PROHIBITION_LIST = [
  // Live or Dead Birds including Frozen Poultry
  { id: 1, item: "LIVE BIRDS", category: "Food/Agriculture", hsCode: "0105.1100-0105.9900, 0106.3100-0106.3900" },
  { id: 2, item: "DEAD BIRDS", category: "Food/Agriculture", hsCode: "0105.1100-0105.9900, 0106.3100-0106.3900" },
  { id: 3, item: "FROZEN POULTRY", category: "Food/Agriculture", hsCode: "0207.1100-0207.2600, 0210.9900" },
  
  // Pork, Beef
  { id: 4, item: "PORK", category: "Food/Agriculture", hsCode: "0201.1000-0204.5000, 0206.1000-0206.9000, 0210.1000-2000" },
  { id: 5, item: "BEEF", category: "Food/Agriculture", hsCode: "0201.1000-0204.5000, 0206.1000-0206.9000, 0210.1000-2000" },
  
  // Birds Eggs (excluding hatching eggs)
  { id: 6, item: "BIRDS EGGS", category: "Food/Agriculture", hsCode: "0407.0000", exclusions: "excluding hatching eggs" },
  
  // Refined Vegetable Oils and Fats
  { id: 7, item: "REFINED VEGETABLE OILS", category: "Food/Agriculture", hsCode: "1507.1000-1516.2090.00", exclusions: "excluding Linseed, Castor and Olive oils. Crude vegetable oil are NOT banned" },
  
  // Sugar with flavoring/coloring
  { id: 8, item: "CANE SUGAR WITH FLAVORING", category: "Food/Agriculture", hsCode: "1701.91.1000-1701.99.9000", notes: "in retail packs" },
  { id: 9, item: "BEET SUGAR WITH FLAVORING", category: "Food/Agriculture", hsCode: "1701.91.1000-1701.99.9000", notes: "in retail packs" },
  
  // Cocoa Products
  { id: 10, item: "COCOA BUTTER", category: "Food/Agriculture", hsCode: "1802.00.0000-1803.20000, 1805.001000-1805.00.9000, 1806.10.0000-1806.20.0000, 1804.00.1000-1804.00.9000" },
  { id: 11, item: "COCOA POWDER", category: "Food/Agriculture", hsCode: "1802.00.0000-1803.20000, 1805.001000-1805.00.9000, 1806.10.0000-1806.20.0000, 1804.00.1000-1804.00.9000" },
  { id: 12, item: "COCOA CAKES", category: "Food/Agriculture", hsCode: "1802.00.0000-1803.20000, 1805.001000-1805.00.9000, 1806.10.0000-1806.20.0000, 1804.00.1000-1804.00.9000" },
  
  // Pasta Products
  { id: 13, item: "SPAGHETTI", category: "Food/Agriculture", hsCode: "1902.1100-1902.30.0000" },
  { id: 14, item: "NOODLES", category: "Food/Agriculture", hsCode: "1902.1100-1902.30.0000" },
  
  // Tomato Products
  { id: 15, item: "TOMATOES WHOLE OR PIECES", category: "Food/Agriculture", hsCode: "2002.10.00.00" },
  { id: 16, item: "TOMATO PASTE", category: "Food/Agriculture", hsCode: "2002.90.20.00, 2002.90.90.00" },
  { id: 17, item: "TOMATO KETCHUP", category: "Food/Agriculture", hsCode: "2103.20.00.00" },
  
  // Fruit Juice
  { id: 18, item: "FRUIT JUICE IN RETAIL PACKS", category: "Food/Agriculture", hsCode: "2009.11.1000-2009.11.9000-2009.90.9000" },
  
  // Beverages
  { id: 19, item: "MINERAL WATERS WITH SUGAR", category: "Food/Agriculture", hsCode: "2201.10.1000-2201.90.0000" },
  { id: 20, item: "AERATED WATERS WITH SUGAR", category: "Food/Agriculture", hsCode: "2201.10.1000-2201.90.0000" },
  { id: 21, item: "NON-ALCOHOLIC BEVERAGES", category: "Food/Agriculture", hsCode: "2202.10.0000-2202.90.9000", exclusions: "excluding energy or Health Drinks (Liquid Dietary Supplements e.g. Power Horse, Red Ginseng etc) 2202.90.1000" },
  { id: 22, item: "BEER BOTTLED", category: "Food/Agriculture", hsCode: "2203.0010.00-2203.0090.00" },
  { id: 23, item: "STOUT BOTTLED", category: "Food/Agriculture", hsCode: "2203.0010.00-2203.0090.00" },
  
  // Cement
  { id: 24, item: "BAGGED CEMENT", category: "Industrial", hsCode: "2523.2900.00" },
  
  // Pharmaceuticals - Medicaments under Headings 3003 and 3004
  { id: 25, item: "PARACETAMOL TABLETS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 26, item: "PARACETAMOL SYRUPS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 27, item: "COTRIMOXAZOLE TABLETS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 28, item: "COTRIMOXAZOLE SYRUPS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 29, item: "METRONIDAZOLE TABLETS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 30, item: "METRONIDAZOLE SYRUPS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 31, item: "CHLOROQUINE TABLETS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 32, item: "CHLOROQUINE SYRUPS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 33, item: "HAEMATINIC FORMULATIONS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 34, item: "FERROUS SULPHATE TABLETS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 35, item: "FERROUS GLUCONATE TABLETS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 36, item: "FOLIC ACID TABLETS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 37, item: "VITAMIN B COMPLEX TABLETS", category: "Pharmaceuticals", hsCode: "3003/3004", exclusions: "except modified released formulations" },
  { id: 38, item: "MULTIVITAMIN TABLETS", category: "Pharmaceuticals", hsCode: "3003/3004", exclusions: "except special formulations" },
  { id: 39, item: "MULTIVITAMIN CAPSULES", category: "Pharmaceuticals", hsCode: "3003/3004", exclusions: "except special formulations" },
  { id: 40, item: "MULTIVITAMIN SYRUPS", category: "Pharmaceuticals", hsCode: "3003/3004", exclusions: "except special formulations" },
  { id: 41, item: "ASPIRIN TABLETS", category: "Pharmaceuticals", hsCode: "3003/3004", exclusions: "except modified released formulation and soluble aspirin" },
  { id: 42, item: "MAGNESIUM TRISILICATE TABLETS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 43, item: "MAGNESIUM TRISILICATE SUSPENSIONS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 44, item: "PIPERAZINE TABLETS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 45, item: "PIPERAZINE SYRUPS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 46, item: "LEVAMISOLE TABLETS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 47, item: "LEVAMISOLE SYRUPS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 48, item: "PENICILLIN OINTMENTS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 49, item: "GENTAMYCIN OINTMENTS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 50, item: "PYRANTEL PAMOATE TABLETS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 51, item: "PYRANTEL PAMOATE SYRUPS", category: "Pharmaceuticals", hsCode: "3003/3004" },
  { id: 52, item: "INTRAVENOUS FLUIDS", category: "Pharmaceuticals", hsCode: "3003/3004", notes: "Dextrose, Normal Saline, etc." },
  { id: 53, item: "WASTE PHARMACEUTICALS", category: "Pharmaceuticals", hsCode: "3006.9200" },
  
  // NPK Fertilizers
  { id: 54, item: "NPK FERTILIZERS", category: "Industrial", hsCode: "3105.10.00.00-3105.90.00.00", notes: "NPK 15-15-15, excluding organic fertiliser" },
  
  // Soaps and Detergents
  { id: 55, item: "SOAPS IN RETAIL PACKS", category: "Industrial", hsCode: "3401.11.1000-3402.90.0000" },
  { id: 56, item: "DETERGENTS IN RETAIL PACKS", category: "Industrial", hsCode: "3401.11.1000-3402.90.0000" },
  
  // Mosquito Coils
  { id: 57, item: "MOSQUITO REPELLANT COILS", category: "Industrial", hsCode: "3808.91.1700" },
  
  // Tyres
  { id: 58, item: "RETHREADED TYRES", category: "Industrial", hsCode: "4012.2010.00", exclusions: "excluding used trucks tyres for rethreading of sized 11.00 x 20 and above" },
  { id: 59, item: "USED PNEUMATIC TYRES", category: "Industrial", hsCode: "4012.2010.00", exclusions: "excluding used trucks tyres for rethreading of sized 11.00 x 20 and above" },
  
  // Paper Products
  { id: 60, item: "CORRUGATED PAPER", category: "Industrial", hsCode: "4808.1000" },
  { id: 61, item: "CORRUGATED PAPER BOARDS", category: "Industrial", hsCode: "4808.1000" },
  { id: 62, item: "CARTONS FROM CORRUGATED PAPER", category: "Industrial", hsCode: "4819.1000" },
  { id: 63, item: "TOILET PAPER", category: "Industrial", hsCode: "4818.1000-4818.9000", exclusions: "excluding baby diapers and incotinent pads for adult use 9619.00.2200" },
  { id: 64, item: "FACIAL TISSUE", category: "Industrial", hsCode: "4818.1000-4818.9000", exclusions: "excluding baby diapers and incotinent pads for adult use 9619.00.2200" },
  { id: 65, item: "EXERCISE BOOKS", category: "Industrial", hsCode: "4820.20.0000" },
  
  // Carpets and Rugs
  { id: 66, item: "CARPETS", category: "Industrial", hsCode: "5701.10.0000-5705.00.0000" },
  { id: 67, item: "RUGS", category: "Industrial", hsCode: "5701.10.0000-5705.00.0000" },
  
  // Footwear, Bags and Suitcases
  { id: 68, item: "FOOTWEARS", category: "Industrial", hsCode: "6401.10.9000-6405.90.9000", exclusions: "excluding Safety Shoes used in oil industries, Sports Shoes, canvass shoes all Completely Knocked Down (CKD) blanks and parts" },
  { id: 69, item: "BAGS", category: "Industrial", hsCode: "4202.11.9000-4202.99.9000", exclusions: "excluding Safety Shoes used in oil industries, Sports Shoes, canvass shoes all Completely Knocked Down (CKD) blanks and parts" },
  { id: 70, item: "SUITCASES", category: "Industrial", hsCode: "4202.11.9000-4202.99.9000", exclusions: "excluding Safety Shoes used in oil industries, Sports Shoes, canvass shoes all Completely Knocked Down (CKD) blanks and parts" },
  
  // Glass Bottles
  { id: 71, item: "HOLLOW GLASS BOTTLES >150ML", category: "Industrial", hsCode: "7010.90.31.00, 7010.90.49.00" },
  
  // Used Equipment
  { id: 72, item: "USED COMPRESSORS", category: "Industrial", hsCode: "8414.30.9000" },
  { id: 73, item: "USED AIR CONDITIONERS", category: "Industrial", hsCode: "8415.10.1000-8415.90.9000" },
  { id: 74, item: "USED FRIDGES", category: "Industrial", hsCode: "8418.10.1000-8418.69.0000" },
  { id: 75, item: "USED FREEZERS", category: "Industrial", hsCode: "8418.10.1000-8418.69.0000" },
  
  // Used Motor Vehicles
  { id: 76, item: "USED MOTOR VEHICLES >12 YEARS", category: "Industrial", hsCode: "8703.10.0000-8703.90.0000" },
  
  // Ball Point Pens
  { id: 77, item: "BALL POINT PENS", category: "Industrial", hsCode: "Various", notes: "including refills, excluding tip" }
];

export const checkImportProhibitionList = (productName, activeIngredient = "") => {
  const searchTerms = [productName, activeIngredient].filter(Boolean).map(term => term.toLowerCase());
  
  return IMPORT_PROHIBITION_LIST.find(item => {
    const itemName = item.item.toLowerCase();
    return searchTerms.some(term => 
      itemName.includes(term) || term.includes(itemName.split(/[/+\s]/)[0])
    );
  });
};