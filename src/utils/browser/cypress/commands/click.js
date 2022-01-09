import logger from '../../../logger';
import getElement from './getElement';

export default (selector, { timeout }) => {
  logger.debug(`click ${selector} timeout ${timeout}`, 'Cypress', 'Click');

  return getElement(selector, { timeout }).click();
};
