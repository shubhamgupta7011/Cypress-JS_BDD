import logger from '../../../logger';
import getElement from './getElement';

export default (selector, { timeout }) => {
  logger.debug(`check ${selector} timeout ${timeout}`, 'Cypress', 'check');

  return getElement(selector, { timeout }).check();
};
