import logger from '../../../logger';
import getElement from './getElement';

export default (selector, textValue, { timeout }) => {
  logger.debug(
    `Element ${selector} is having value ${textValue}, timeout ${timeout}`,
    'Cypress',
    'isHavingValue',
  );

  return getElement(selector, { timeout }).should('have.value', textValue);
};
