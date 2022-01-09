import logger from '../../../logger';
import getElement from './getElement';

export default (selector, { timeout }) => {
  logger.debug(
    `Element ${selector} is Not Visible timeout ${timeout}`,
    'Cypress',
    'isNotVisible',
  );

  return getElement(selector, { timeout }).should('not.be.visible');
};
