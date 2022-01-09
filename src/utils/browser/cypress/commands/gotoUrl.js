import logger from '../../../logger';

export default (url, { timeout }) => {
  logger.debug(`navigate to ${url}, timeout ${timeout}`, 'Cypress', 'gotoUrl');

  return cy.visit(url, { timeout });
};
