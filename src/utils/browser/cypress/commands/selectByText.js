import logger from '../../../logger';
import getElement from './getElement';

export default (selector, visibleText, { timeout }) => {
  logger.debug(
    `select ${selector} by visibleText ${visibleText} timeout ${timeout}`,
    'Cypress',
    'selectByText',
  );
  return getElement(selector, { timeout })
    .select(visibleText);
};
