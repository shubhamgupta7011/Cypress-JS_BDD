const FILE_NAME = 'ABC_v2_1.xlsx';

const sheetNames = {
  sheet1: 'Contactos',
};

const SHEET_NAMES_ARRAY = [
  sheetNames.sheet1,
];

const COLUMN_NAMES = {
  identifier: 'Identifier',
  companyName: 'Company name',
  analysisComp: 'Analysis comp.',
  analysisLab: 'Analisys lab.',
  supplier: 'Supplier',
  pickingFactory: 'Picking Factory',
  contactName: 'Contact name',
  contactEmail: 'Contact Email',
  contactPhone: 'Contact Phone',
};

const COLUMN_ORDER_ARRAY = [
  COLUMN_NAMES.identifier,
  COLUMN_NAMES.companyName,
  COLUMN_NAMES.analysisComp,
  COLUMN_NAMES.analysisLab,
  COLUMN_NAMES.supplier,
  COLUMN_NAMES.pickingFactory,
  COLUMN_NAMES.contactName,
  COLUMN_NAMES.contactEmail,
  COLUMN_NAMES.contactPhone,
];

const COLUMN_HEADER_CREATE_OBJECT = [[
  { header: COLUMN_ORDER_ARRAY[0] },
  { header: COLUMN_ORDER_ARRAY[1] },
  { header: COLUMN_ORDER_ARRAY[2] },
  { header: COLUMN_ORDER_ARRAY[3] },
  { header: COLUMN_ORDER_ARRAY[4] },
  { header: COLUMN_ORDER_ARRAY[5] },
  { header: COLUMN_ORDER_ARRAY[6] },
  { header: COLUMN_ORDER_ARRAY[7] },
  { header: COLUMN_ORDER_ARRAY[8] },
]];

/**
 * Generate Array of row data of contacts
 * @param companyDataInput companydata reference to data file
 * @param arrayIndex index of contactName, email and phone number
 * @returns {Array}
 */
// const getAddContactRowData = (companyDataInput, arrayIndex)=> {
//   const {
//     identifier, companyName, isAnalysisCompany, isAnalysisLab,
//     isSupplier, isPickingFactory, contactOwner, emails, phones,
//   } = companyData.COMPANY_DATA[companyDataInput];

//   return [
//     identifier,
//     companyName,
//     isAnalysisCompany,
//     isAnalysisLab,
//     isSupplier,
//     isPickingFactory,
//     contactOwner ? contactOwner[arrayIndex] : '',
//     emails ? emails[arrayIndex] : '',
//     phones ? phones[arrayIndex] : 0,
//   ];
// };

export default {
  FILE_NAME,
  SHEET_NAMES_ARRAY,
  COLUMN_NAMES,
  COLUMN_ORDER_ARRAY,
  COLUMN_HEADER_CREATE_OBJECT,
  // getAddContactRowData,
};
