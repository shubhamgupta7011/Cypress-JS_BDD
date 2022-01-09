import logger from '../../../logger';
import getElement from './getElement';

export default (selector, { timeout }) => {
  logger.debug(`Element ${selector} is Exists timeout ${timeout}`, 'Cypress', 'isExists');

  return getElement(selector, { timeout });
};
