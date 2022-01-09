import logger from '../../../logger';

export default (selector, { timeout }) => {
  logger.debug(`selector ${selector} timeout ${timeout}`, 'Cypress', 'isNotExist');

  if (selector.startsWith('//') || selector.startsWith('(')) {
    return cy.xpath(selector, { timeout }).should('have.length', '0');
  }
  return cy.get(selector, { timeout }).should('have.length', '0');
};
