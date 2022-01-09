import Page from './Page';
import * as CONTACTS_PAGE_SELECTORS from '../selectors/contacts.selectors';
import * as CONTACTS_PAGE_COPY from '../copy/contacts.copy';

class Contacts extends Page {
  constructor() {
    super();
    this.pageSelector = CONTACTS_PAGE_SELECTORS;
    this.pageCopy = CONTACTS_PAGE_COPY;
  }

  get contactSearchFileName() {
    return this.testData.excel.companyContactsSearch.FILE_NAME;
  }

  get contactsUploadTemplateFileName() {
    return this.testData.excel.contactsUpload.FILE_NAME;
  }

  navigateToContacts() {
    this.browser.click(this.pageSelector.menuContacts(this.siteLanguage));
    return this;
  }

  selectWarehouse(warehouse) {
    this.browser
      .click(this.pageSelector.WAREHOUSE_DROPDOWN_IMG)
      .click(this.pageSelector.warehouseDropdownOption(warehouse))
      .isHavingValue(this.pageSelector.WAREHOUSE_INPUT, warehouse);

    return this;
  }

  selectSeason(season) {
    this.browser
      .clockWait(2)
      .click(this.pageSelector.SEASON_DROPDOWN_IMG)
      .clockWait(1)
      .isVisible(this.pageSelector.seasonDropdownOption(season))
      .click(this.pageSelector.seasonDropdownOption(season))
      .isHavingValue(this.pageSelector.SEASON_INPUT, season);

    return this;
  }

  parseContactUploadTemplateXLSXtoJSON(keyName) {
    this.excel.storeParsedXLStoJSON(this.contactsUploadTemplateFileName, keyName);

    return this;
  }

  validateContactsUploadTemplateXLSXDownloaded() {
    this.excel.checkXLSFileExists(this.contactsUploadTemplateFileName);

    return this;
  }

  validateContactsUploadTemplateXLSColumnNames(keyName) {
    const { COLUMN_ORDER_ARRAY, SHEET_NAMES_ARRAY } = this.testData.excel.contactsUpload;

    this.excel.isHavingSheetNames(keyName, SHEET_NAMES_ARRAY);
    this.excel.isHavingColoumnNames(keyName, COLUMN_ORDER_ARRAY);

    return this;
  }

  validateContactResultsFileDownloaded() {
    this.excel.checkXLSFileExists(this.contactSearchFileName);

    return this;
  }

  parseCompanyContactResultsFiletoJSON(keyName) {
    this.excel.storeParsedXLStoJSON(this.contactSearchFileName, keyName);

    return this;
  }

  validateCompanyContactsResultsFileColumnNames(keyName) {
    const { COLUMN_ORDER_ARRAY } = this.testData.excel.companyContactsSearch;
    this.excel.isHavingColoumnNames(keyName, COLUMN_ORDER_ARRAY);

    return this;
  }

  validateCompanyContactResultsFileWithRecordsMoreThan(keyName, recordCount) {
    this.excel.isHavingDataRowCountMoreThan(keyName, recordCount);

    return this;
  }
}

export default new Contacts();
