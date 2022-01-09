import logger from '../../../logger';

export default (selector, { timeout }) => {
  logger.debug(`selector ${selector} timeout ${timeout}`, 'Cypress', 'getElements');
  // TODO improve conditon with regex
  if (selector.startsWith('//') || selector.startsWith('(')) {
    return cy.xpath(selector, { timeout }).should('have.length.above', 1);
    // show error if selector does not returns multiple elements
  }
  return cy.get(selector, { timeout }).should('have.length.above', 1);
  // show error if selector does not returns multiple elements
};
