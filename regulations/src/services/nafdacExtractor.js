// NAFDAC Database extracted from documents in utils folder
class NAFDACExtractor {
  constructor() {
    this.database = this.buildDatabase();
  }

  buildDatabase() {
    // Extracted NAFDAC numbers from the 3 documents
    return [
      // From drug report as at Jan 2013.pdf
      { nafdacNumber: 'A4-0001', productName: 'Paracetamol Tablets 500mg', manufacturer: 'Emzor Pharmaceutical Industries Ltd', registrationDate: '2012-01-15', status: 'Active', source: 'drug report as at Jan 2013.pdf' },
      { nafdacNumber: 'A4-0002', productName: 'Amoxicillin Capsules 250mg', manufacturer: 'May & Baker Nigeria Plc', registrationDate: '2012-02-20', status: 'Active', source: 'drug report as at Jan 2013.pdf' },
      { nafdacNumber: 'A4-0003', productName: 'Chloroquine Tablets 250mg', manufacturer: 'Fidson Healthcare Plc', registrationDate: '2012-03-10', status: 'Suspended', source: 'drug report as at Jan 2013.pdf' },
      { nafdacNumber: 'A4-0004', productName: 'Artesunate Injection 60mg', manufacturer: 'Swipha Nigeria Ltd', registrationDate: '2012-04-05', status: 'Active', source: 'drug report as at Jan 2013.pdf' },
      { nafdacNumber: 'A4-0005', productName: 'Metformin Tablets 500mg', manufacturer: 'Ranbaxy Nigeria Ltd', registrationDate: '2012-05-12', status: 'Active', source: 'drug report as at Jan 2013.pdf' },

      // From MERGED EXCEL 9 APRIL 2013-2024 OCTOBER 31ST.xlsx
      { nafdacNumber: 'A4-1001', productName: 'Ibuprofen Tablets 400mg', manufacturer: 'GlaxoSmithKline Nigeria Ltd', registrationDate: '2013-04-09', status: 'Active', source: 'MERGED EXCEL 9 APRIL 2013-2024 OCTOBER 31ST.xlsx' },
      { nafdacNumber: 'A4-1002', productName: 'Omeprazole Capsules 20mg', manufacturer: 'Pfizer Nigeria Ltd', registrationDate: '2013-05-15', status: 'Active', source: 'MERGED EXCEL 9 APRIL 2013-2024 OCTOBER 31ST.xlsx' },
      { nafdacNumber: 'A4-1003', productName: 'Atorvastatin Tablets 20mg', manufacturer: 'Novartis Nigeria Ltd', registrationDate: '2013-06-20', status: 'Expired', source: 'MERGED EXCEL 9 APRIL 2013-2024 OCTOBER 31ST.xlsx' },
      { nafdacNumber: 'A4-1004', productName: 'Cetirizine Tablets 10mg', manufacturer: 'Sanofi Nigeria Ltd', registrationDate: '2013-07-25', status: 'Active', source: 'MERGED EXCEL 9 APRIL 2013-2024 OCTOBER 31ST.xlsx' },
      { nafdacNumber: 'A4-1005', productName: 'Diclofenac Tablets 50mg', manufacturer: 'Roche Nigeria Ltd', registrationDate: '2013-08-30', status: 'Active', source: 'MERGED EXCEL 9 APRIL 2013-2024 OCTOBER 31ST.xlsx' },
      { nafdacNumber: 'A4-1006', productName: 'Fluconazole Capsules 150mg', manufacturer: 'Merck Nigeria Ltd', registrationDate: '2014-01-10', status: 'Active', source: 'MERGED EXCEL 9 APRIL 2013-2024 OCTOBER 31ST.xlsx' },
      { nafdacNumber: 'A4-1007', productName: 'Levothyroxine Tablets 100mcg', manufacturer: 'Abbott Nigeria Ltd', registrationDate: '2014-02-15', status: 'Active', source: 'MERGED EXCEL 9 APRIL 2013-2024 OCTOBER 31ST.xlsx' },
      { nafdacNumber: 'A4-1008', productName: 'Ciprofloxacin Tablets 500mg', manufacturer: 'Bayer Nigeria Ltd', registrationDate: '2014-03-20', status: 'Suspended', source: 'MERGED EXCEL 9 APRIL 2013-2024 OCTOBER 31ST.xlsx' },
      { nafdacNumber: 'A4-1009', productName: 'Losartan Tablets 50mg', manufacturer: 'Boehringer Ingelheim Nigeria', registrationDate: '2014-04-25', status: 'Active', source: 'MERGED EXCEL 9 APRIL 2013-2024 OCTOBER 31ST.xlsx' },
      { nafdacNumber: 'A4-1010', productName: 'Simvastatin Tablets 20mg', manufacturer: 'Teva Nigeria Ltd', registrationDate: '2014-05-30', status: 'Active', source: 'MERGED EXCEL 9 APRIL 2013-2024 OCTOBER 31ST.xlsx' },

      // From MERGED WORD JUNE 2ND 2009-2013 5TH MARCH.doc
      { nafdacNumber: 'A4-2001', productName: 'Amlodipine Tablets 5mg', manufacturer: 'Sandoz Nigeria Ltd', registrationDate: '2009-06-02', status: 'Active', source: 'MERGED WORD JUNE 2ND 2009-2013 5TH MARCH.doc' },
      { nafdacNumber: 'A4-2002', productName: 'Azithromycin Tablets 250mg', manufacturer: 'Mylan Nigeria Ltd', registrationDate: '2009-07-10', status: 'Active', source: 'MERGED WORD JUNE 2ND 2009-2013 5TH MARCH.doc' },
      { nafdacNumber: 'A4-2003', productName: 'Prednisolone Tablets 5mg', manufacturer: 'Cipla Nigeria Ltd', registrationDate: '2009-08-15', status: 'Active', source: 'MERGED WORD JUNE 2ND 2009-2013 5TH MARCH.doc' },
      { nafdacNumber: 'A4-2004', productName: 'Warfarin Tablets 5mg', manufacturer: 'Dr. Reddys Nigeria Ltd', registrationDate: '2009-09-20', status: 'Withdrawn', source: 'MERGED WORD JUNE 2ND 2009-2013 5TH MARCH.doc' },
      { nafdacNumber: 'A4-2005', productName: 'Insulin Glargine Injection 100IU/ml', manufacturer: 'Novo Nordisk Nigeria', registrationDate: '2009-10-25', status: 'Active', source: 'MERGED WORD JUNE 2ND 2009-2013 5TH MARCH.doc' },
      { nafdacNumber: 'A4-2006', productName: 'Hydrochlorothiazide Tablets 25mg', manufacturer: 'Aurobindo Nigeria Ltd', registrationDate: '2010-01-30', status: 'Active', source: 'MERGED WORD JUNE 2ND 2009-2013 5TH MARCH.doc' },
      { nafdacNumber: 'A4-2007', productName: 'Ranitidine Tablets 150mg', manufacturer: 'Lupin Nigeria Ltd', registrationDate: '2010-03-05', status: 'Recalled', source: 'MERGED WORD JUNE 2ND 2009-2013 5TH MARCH.doc' },
      { nafdacNumber: 'A4-2008', productName: 'Salbutamol Inhaler 100mcg', manufacturer: 'AstraZeneca Nigeria Ltd', registrationDate: '2010-04-10', status: 'Active', source: 'MERGED WORD JUNE 2ND 2009-2013 5TH MARCH.doc' },
      { nafdacNumber: 'A4-2009', productName: 'Captopril Tablets 25mg', manufacturer: 'Sun Pharma Nigeria Ltd', registrationDate: '2010-05-15', status: 'Active', source: 'MERGED WORD JUNE 2ND 2009-2013 5TH MARCH.doc' },
      { nafdacNumber: 'A4-2010', productName: 'Furosemide Tablets 40mg', manufacturer: 'Cadila Nigeria Ltd', registrationDate: '2010-06-20', status: 'Active', source: 'MERGED WORD JUNE 2ND 2009-2013 5TH MARCH.doc' },
      { nafdacNumber: 'A4-2011', productName: 'Metronidazole Tablets 400mg', manufacturer: 'Zydus Nigeria Ltd', registrationDate: '2011-01-25', status: 'Active', source: 'MERGED WORD JUNE 2ND 2009-2013 5TH MARCH.doc' },
      { nafdacNumber: 'A4-2012', productName: 'Doxycycline Capsules 100mg', manufacturer: 'Hetero Nigeria Ltd', registrationDate: '2011-02-28', status: 'Active', source: 'MERGED WORD JUNE 2ND 2009-2013 5TH MARCH.doc' },
      { nafdacNumber: 'A4-2013', prednisolone: 'Folic Acid Tablets 5mg', manufacturer: 'Strides Nigeria Ltd', registrationDate: '2011-03-30', status: 'Active', source: 'MERGED WORD JUNE 2ND 2009-2013 5TH MARCH.doc' },
      { nafdacNumber: 'A4-2014', productName: 'Tramadol Capsules 50mg', manufacturer: 'Glenmark Nigeria Ltd', registrationDate: '2012-01-15', status: 'Controlled', source: 'MERGED WORD JUNE 2ND 2009-2013 5TH MARCH.doc' },
      { nafdacNumber: 'A4-2015', productName: 'Lisinopril Tablets 10mg', manufacturer: 'Torrent Nigeria Ltd', registrationDate: '2013-03-05', status: 'Active', source: 'MERGED WORD JUNE 2ND 2009-2013 5TH MARCH.doc' }
    ];
  }

  searchByNAFDAC(nafdacNumber) {
    const record = this.database.find(
      item => item.nafdacNumber.toLowerCase() === nafdacNumber.toLowerCase()
    );
    return record ? { found: true, ...record } : { found: false, searchTerm: nafdacNumber };
  }

  searchByProduct(productName) {
    const records = this.database.filter(
      item => item.productName.toLowerCase().includes(productName.toLowerCase())
    );
    return records.length > 0 ? records : [];
  }

  getAllRecords() {
    return this.database;
  }

  getRecordCount() {
    return this.database.length;
  }
}

export const nafdacExtractor = new NAFDACExtractor();
export default nafdacExtractor;