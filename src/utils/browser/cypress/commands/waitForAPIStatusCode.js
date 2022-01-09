import logger from '../../../logger';

export default (watchName, {
  url, method, statusCode, timeout,
}) => {
  logger.debug(
    `Wait for ${watchName},url ${url},method ${method} \n`
      + `returns status code ${statusCode} timeout in ${timeout} \n `,
    'Cypress',
    'waitForAPICall',
  );

  return cy
    .intercept({ method, url })
    .as(watchName)
    .wait(`@${watchName}`, { requestTimeout: timeout })
    .its('response.statusCode')
    .should('eq', statusCode);
};
