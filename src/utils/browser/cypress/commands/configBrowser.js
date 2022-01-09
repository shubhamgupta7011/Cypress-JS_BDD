import logger from '../../../logger';
import * as browserConfig from '../../browser-config';

const setDefaultCommandTimeout = () => {
  logger.warning(
    `setting default command timeout to ${browserConfig.ELEMENT_TIMEOUT_SHORT}`,
    'Cypress',
    'defaultCommandTimeout',
  );
  Cypress.config('defaultCommandTimeout', browserConfig.ELEMENT_TIMEOUT_SHORT);
};

const setPageLoadTimeout = () => {
  logger.warning(
    `setting page load timeout to ${browserConfig.PAGE_LOAD_TIMEOUT}`,
    'cypress',
    'pageLoadTimeout',
  );
  Cypress.config('pageLoadTimeout', browserConfig.PAGE_LOAD_TIMEOUT);
};

export default () => {
  logger.info('setting the browser config', 'cypress', 'startBrowser');
  setDefaultCommandTimeout();
  setPageLoadTimeout();
  return Promise.resolve();
};
