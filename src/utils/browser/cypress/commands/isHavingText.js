import logger from '../../../logger';
import getElement from './getElement';

export default (selector, textValue, { timeout }) => {
  logger.debug(`Element ${selector} is having text ${textValue}, timeout ${timeout}`, 'Cypress', 'isVisible');

  return getElement(selector, { timeout }).should('contain', textValue);
};
