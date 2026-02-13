import * as XLSX from 'xlsx';

export const extractNAFDACFromExcel = async () => {
  try {
    const response = await fetch('/MERGED EXCEL 9 APRIL 2013-2024 OCTOBER 31ST.xlsx');
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    
    const records = [];
    
    // Process all sheets
    workbook.SheetNames.forEach(sheetName => {
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      
      jsonData.forEach((row, index) => {
        if (index === 0) return; // Skip header
        
        // Look for NAFDAC numbers in each column
        row.forEach(cell => {
          if (typeof cell === 'string' && cell.match(/A4-\d{4,6}/)) {
            const nafdacNumber = cell.match(/A4-\d{4,6}/)[0];
            
            // Extract product info from surrounding cells
            const productName = row[1] || row[2] || 'Unknown Product';
            const manufacturer = row[3] || row[4] || 'Unknown Manufacturer';
            
            records.push({
              nafdacNumber,
              productName: typeof productName === 'string' ? productName : 'Unknown Product',
              manufacturer: typeof manufacturer === 'string' ? manufacturer : 'Unknown Manufacturer',
              registrationDate: '2013-2024',
              status: 'Active',
              source: 'MERGED EXCEL 9 APRIL 2013-2024 OCTOBER 31ST.xlsx'
            });
          }
        });
      });
    });
    
    return records;
  } catch (error) {
    console.error('Error extracting from Excel:', error);
    return [];
  }
};