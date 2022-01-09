import logger from '../../../logger';
import getElement from './getElement';

export default (selector, { timeout }) => {
  logger.debug(`Un-check ${selector} timeout ${timeout}`, 'Cypress', 'Uncheck');

  return getElement(selector, { timeout }).uncheck();
};
