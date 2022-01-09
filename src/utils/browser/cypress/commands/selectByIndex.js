import logger from '../../../logger';
import getElement from './getElement';

export default (selector, index, { timeout }) => {
  logger.debug(
    `select ${selector} by index ${index} timeout ${timeout}`,
    'Cypress',
    'selectByIndex',
  );

  return getElement(selector, { timeout }).select(index);
};
