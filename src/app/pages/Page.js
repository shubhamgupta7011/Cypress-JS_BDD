/* eslint-disable import/no-named-as-default-member */
/* eslint-disable class-methods-use-this */

import Browser from '../../utils/browser';
import Excel from '../../utils/excel';
import commonConfig from '../config/common.config';
import envConfig from '../config/env.config';
import data from '../data';

const { SITE_LANGUAGES, DEFAULT_SITE_LANGUAGE } = commonConfig;
const { ENV_NAMES, DEFAULT_ENVIRONMENT } = envConfig;

class Page {
  constructor() {
    this.browser = new Browser();
    this.excel = Excel;
  }

  get siteLanguage() {
    const language = Cypress.env('lang') || DEFAULT_SITE_LANGUAGE;
    const isValidLanguage = Object.values(SITE_LANGUAGES).includes(language);
    if (isValidLanguage) {
      return language;
    }
    throw new Error(`Invalid Site language code !! ${language}`);
  }

  get testEnvironment() {
    const testEnv = Cypress.env('testenv') || DEFAULT_ENVIRONMENT;
    const isValidEnvironment = Object.values(ENV_NAMES).includes(testEnv);
    if (isValidEnvironment) {
      return testEnv;
    }
    throw new Error(`Invalid Test environment name !! ${testEnv}`);
  }

  get appUser() {
    const username = Cypress.env('username') || '';
    const password = Cypress.env('password') || '';
    if (username && password) {
      return {
        username,
        password,
      };
    }
    throw new Error('App user credentials unavailable!!');
  }

  get testData() {
    return data;
  }

  get apiEndPoint() {
    return envConfig.API_END_URLS;
  }

  get appTimeout() {
    return commonConfig.TIMEOUT_IN_SECS;
  }
}

export default Page;
