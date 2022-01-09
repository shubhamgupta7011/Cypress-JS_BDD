import logger from '../../../logger';

export default (timeoutInSecs) => {
  logger.debug(`clockWait timeout ${timeoutInSecs}`, 'Cypress', 'clockWait');

  return cy.wait(timeoutInSecs);
};
