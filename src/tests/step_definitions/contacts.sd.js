import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import logger from '../../utils/logger';
import contacts from '../../app/pages/Contacts.page';
import home from '../../app/pages/Home.page';

When('User navigate to contacts', () => {
  logger.info('navigate to test management - contacts');

  home.closeDefaultPopup();
  contacts.navigateToContacts();
});

When('User select {string} warehouse for contacts search', (searchData) => {
  logger.info(`User select ${searchData} warehouse for contacts search`);
  const { warehouse } = contacts.testData.warehouse.WAREHOUSE_WITH_SEASON[searchData];

  contacts.selectWarehouse(warehouse);
});

Then('User see contacts upload template xlsx file dowloaded', () => {
  logger.info('User see contacts upload template xlsx file dowloaded');

  contacts.validateContactsUploadTemplateXLSXDownloaded();
});

When('Parse contacts upload template xlsx file to key {string}', (keyName) => {
  logger.info(`Parse contacts upload template xlsx file to key ${keyName}`);

  contacts.parseContactUploadTemplateXLSXtoJSON(keyName);
});

Then('User see contacts upload template xlsx file {string} with valid columns', (keyName) => {
  logger.info(`User see contacts upload template xlsx file ${keyName} with valid columns`);

  contacts.validateContactsUploadTemplateXLSColumnNames(keyName);
});

When('User upload new contacts for existing companies {string} and {string}', (companyData1, companyData2) => {
  logger.info(`User upload new contacts for existing companies ${companyData1} and ${companyData2}`);
  const {
    SHEET_NAMES_ARRAY, COLUMN_HEADER_CREATE_OBJECT, getAddContactRowData,
  } = contacts.testData.excel.contactsUpload;
  const fileName = `CREATE_CONTACTS_${contacts.testData.utils.getShortUUID()}.xlsx`;

  contacts.excel.createXLSXFile({
    fileName,
    sheetNames: SHEET_NAMES_ARRAY,
    columnsNames: COLUMN_HEADER_CREATE_OBJECT,
    sheetData: [[
      getAddContactRowData(companyData1, 0),
      getAddContactRowData(companyData1, 1),
      getAddContactRowData(companyData2, 0),
      getAddContactRowData(companyData2, 1),
    ]],
  });
});
