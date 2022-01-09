import logger from '../../../logger';

export default (selector, { timeout }) => {
  logger.debug(`selector ${selector} timeout ${timeout}`, 'Cypress', 'getElement');
  // TODO improve conditon with regex
  if (selector.startsWith('//') || selector.startsWith('(')) {
    return cy.xpath(selector, { timeout }).should('have.length', '1');
    // show error if selector returns multiple elements
  }
  return cy.get(selector, { timeout }).should('have.length', '1');
  // show error if selector returns multiple elements
};
