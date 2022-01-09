import logger from '../../../logger';
import getElement from './getElement';

export default (selector, value, { timeout }) => {
  logger.debug(
    `select ${selector} by value ${value} timeout ${timeout}`,
    'Cypress',
    'selectByValue',
  );

  return getElement(selector, { timeout }).select(value);
};
