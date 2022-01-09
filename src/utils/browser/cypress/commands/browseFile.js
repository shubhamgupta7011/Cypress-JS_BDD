import logger from '../../../logger';
import getElement from './getElement';

export default (selector, filePath, { timeout, setFileName }) => {
  logger.debug(
    `Browse file ${filePath} \n into selector ${selector} in timeout ${timeout}`,
    'Cypress',
    'browseExcel',
  );

  return cy
    .fixture(filePath, 'binary')
    .then(Cypress.Blob.binaryStringToBlob)
    .then((fileContent) => {
      getElement(selector, { timeout })
        .attachFile({
          fileContent,
          fileName: setFileName,
          encoding: 'utf8',
          lastModified: new Date().getTime(),
        });
    });
};
