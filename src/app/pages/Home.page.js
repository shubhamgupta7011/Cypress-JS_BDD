import Page from './Page';
import envConfig from '../config/env.config';
import * as HOME_PAGE_SELECTORS from '../selectors/home.selectors';
import * as HOME_PAGE_COPY from '../copy/home.copy';

class Home extends Page {
  constructor() {
    super();
    this.pageSelector = HOME_PAGE_SELECTORS;
    this.pageCopy = HOME_PAGE_COPY;
  }

  loginToTestManagementApp() {
    const appUrl = `${envConfig.ENV_URLS[this.testEnvironment]}`;
    this.browser.gotoUrl(
      appUrl,
    );
  }

  validatePageTitle() {
    this.browser.isHavingText(
      this.pageSelector.PAGE_TITLE,
      this.pageCopy.TITLE[this.siteLanguage],
    );
  }

  validateDefaultPopupTitle() {
    this.browser.isHavingText(
      this.pageSelector.POPUP_TITLE,
      this.pageCopy.DEFAULT_POP_TITLE[this.siteLanguage],
    );
  }

  closeDefaultPopup() {
    this.browser.click(this.pageSelector.POPUP_CLOSE_ICON);
  }
}

export default new Home();
