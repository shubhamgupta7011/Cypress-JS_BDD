import logger from '../../../logger';
import getElement from './getElement';

export default (selector, { timeout }) => {
  logger.debug(`Element ${selector} is checked, timeout ${timeout}`, 'Cypress', 'isChecked');

  return getElement(selector, { timeout }).should('be.checked');
};
