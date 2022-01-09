import { Before } from 'cypress-cucumber-preprocessor/steps';
import logger from '../../../utils/logger';
import Page from '../../../app/pages/Page';

const page = new Page();

Before(() => {
  logger.info('Before hook - config browser');
  page.browser.configBrowser();
  logger.info(`SITE LANGUAGE: ${page.siteLanguage}`);
  logger.info(`TEST ENVIRONMENT: ${page.testEnvironment}`);
});
