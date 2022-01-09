import logger from '../../../logger';

export default ({ timeout }) => {
  logger.debug(`getTitle timeout ${timeout}`, 'Cypress', 'getTitle');

  return cy.title({ timeout });
};
