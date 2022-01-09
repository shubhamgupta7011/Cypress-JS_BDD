import logger from '../../../logger';

export default (url, username, password, { timeout }) => {
  logger.debug(`navigate to ${url} for user ${username}, timeout ${timeout}`, 'Cypress', 'gotoUrl');

  return cy.visit(url, { timeout, auth: { username, password } });
};
