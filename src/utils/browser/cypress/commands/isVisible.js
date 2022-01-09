import logger from '../../../logger';
import getElement from './getElement';

export default (selector, { timeout }) => {
  logger.debug(
    `Element ${selector} is Visible timeout ${timeout}`,
    'Cypress',
    'isVisible',
  );
  return getElement(selector, { timeout }).should('be.visible');
};
