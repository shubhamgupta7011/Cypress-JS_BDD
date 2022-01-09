import logger from '../../../logger';
import getElement from './getElement';

export default (selector, { timeout }) => {
  logger.debug(`Double click ${selector} timeout ${timeout}`, 'Cypress', 'DoubleClick');

  return getElement(selector, { timeout }).dblclick();
};
