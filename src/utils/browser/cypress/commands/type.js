import logger from '../../../logger';
import getElement from './getElement';

export default (selector, value, { timeout }) => {
  logger.debug(
    `Type ${selector} value ${value} timeout ${timeout}`,
    'Cypress',
    'Type',
  );

  return getElement(selector, { timeout })
    .clear()
    .type(value.toString(), { scrollBehavior: 'center' });
};
