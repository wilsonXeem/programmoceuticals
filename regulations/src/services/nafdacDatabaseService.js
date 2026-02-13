import { nafdacExtractor } from './nafdacExtractor';

export const searchNAFDACDatabase = async (searchTerm) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = nafdacExtractor.searchByNAFDAC(searchTerm);
      resolve(result);
    }, 300);
  });
};

export const searchByProductName = async (productName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = nafdacExtractor.searchByProduct(productName);
      resolve(results);
    }, 300);
  });
};

export const refreshDatabase = async () => {
  return nafdacExtractor.getRecordCount();
};

export const getAllNAFDACRecords = () => {
  return nafdacExtractor.getAllRecords();
};

export default { searchNAFDACDatabase, searchByProductName, getAllNAFDACRecords, refreshDatabase };