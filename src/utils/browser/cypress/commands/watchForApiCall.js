import logger from '../../../logger';

export default (watchName, { url, method }) => {
  logger.debug(
    `Watch for ${watchName}, resouce url ${url}, method ${method}`,
    'Cypress',
    'watchForAPICall',
  );

  return cy.intercept({ method, url }).as(watchName);
};
