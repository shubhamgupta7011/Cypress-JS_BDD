import path from 'path';
import logger from '../logger';
import globalStore from '../../app/data/generic/globals';

const FILE_DOWNLOAD_BASE_PATH = Cypress.config('downloadsFolder').toString();
const FILE_UPLOAD_BASE_PATH = Cypress.config('fixturesFolder').toString();

const TIME_OUTS = {
  FILE_CREATE: 60 * 1000,
  FILE_READ: 30 * 1000,
  FILE_ARCHIVE: 60 * 1000,
};

/**
 * Check the file exists
 * @param fileName filename with extention
 * @param  basePath upload or download folder path default to download path
 * @param  timeout to wait for file
 * @returns
 */
function checkXLSFileExists(
  fileName,
  { basePath, timeout } = { basePath: FILE_DOWNLOAD_BASE_PATH, timeout: TIME_OUTS.FILE_CREATE },
) {
  const filePath = path.join(basePath, fileName);
  logger.info(`check if file \n ${filePath} Exists \n Timout ${timeout}`);

  return cy.readFile(filePath, 'utf8', {
    timeout,
  });
}

/**
 * Create excel from JSON object
 * @param fileName filename with extention
 * @param sheetNames first sheetname
 * @param sheetContents first sheet contents in array
 * @returns
 */
const createXLSFromJson = (fileName, sheetNames, sheetContents) => {
  const fileDetails = {
    fileName: path.join(FILE_UPLOAD_BASE_PATH, fileName),
    sheetNames,
    sheetContents,
  };
  logger.info(`create file ${fileName} \n with sheetnames ${sheetNames.join()}`);

  return cy.task('createXLSFromJson', fileDetails).then(() => {
    checkXLSFileExists(fileName, { basePath: FILE_UPLOAD_BASE_PATH });
  });
};

/**
 * Move files from source to destination
 * @returns
 * @param fileName: name of the file to move
 * @param srcFolder source path of the file
 * @param destFolder destination path of the file
 * @param timeout to wait for file
 */
const archiveExcelFile = (
  fileName,
  { srcFolder, destFolder, timeout } = {
    srcFolder: path.join(FILE_DOWNLOAD_BASE_PATH, fileName),
    destFolder: path.join(`${FILE_DOWNLOAD_BASE_PATH}/archive`),
    timeout: TIME_OUTS.FILE_ARCHIVE,
  },
) => {
  const fileDetails = {
    srcFolder, destFolder, fileName,
  };

  logger.info(`Move file from ${srcFolder} to ${destFolder}`);

  return cy.task('moveFile', fileDetails).then(() => {
    cy.readFile(path.join(srcFolder, fileName), { timeout }).should('exist');
  });
};

/**
 * Create excel from array objects using EXCELJS
 * @param fileName filename with extention
 * @param filePath FILE_UPLOAD_BASE_PATH | typeof FILE_DOWNLOAD_BASE_PATH
 * @param sheetName Array of sheetnames
 * @param columnsNames Array of column names
 * @param sheetData array of sheet contents
 * @returns
 */
const createXLSXFile = ({
  fileName,
  filePath = FILE_UPLOAD_BASE_PATH,
  sheetNames,
  columnsNames, sheetData,
}) => {
  const fileDetails = {
    fileName: path.join(filePath, fileName),
    sheetNames,
    columnsNames,
    sheetContents: sheetData,
  };
  logger.info(`create file ${fileDetails.fileName} \n with sheetnames ${fileDetails.sheetNames.join()} \n using EXCELJS`);

  cy
    .task('createXLSXFileExcelJS', fileDetails).then(() => {
      checkXLSFileExists(fileName, { basePath: FILE_UPLOAD_BASE_PATH });
    })
    .wait(2 * 1000); // to handle to read empty file
  return checkXLSFileExists(fileName, { basePath: FILE_UPLOAD_BASE_PATH });
};

/**
 * parse xls contents to JSON and store in global key store
 * @param fileName filename with extention
 * @param keyName to store in globals
 * @param basePath upload or download folder, defaults to download folder
 * @returns
 */
const storeParsedXLStoJSON = (
  fileName, keyName, { basePath } = { basePath: FILE_DOWNLOAD_BASE_PATH }) => {
  const filePath = path.join(basePath, `${fileName}`);
  logger.info(`parse file ${filePath} content to json \n to the key ${keyName}`);

  return cy.task('parseXLSContents', filePath).then((parsedOutput) => {
    const { sheetNames, sheetContents } = JSON.parse(JSON.stringify(parsedOutput));

    expect(sheetNames).to.be.an('array');
    expect(sheetContents).to.be.an('array');
    expect(sheetNames.length).to.be.greaterThan(0);
    expect(sheetContents.length).to.be.greaterThan(0);

    globalStore.setXLSParsedJSON(keyName, JSON.parse(JSON.stringify(parsedOutput)));
    archiveExcelFile(fileName);
  });
};

/**
 * check for least number of records in the excel file
 * @param keyName keyname where parsed json is stored
 * @param recordCount minimum record count
 * @param sheetNumber sheetNumber default to first sheet 0
 * @returns
 */
const isHavingDataRowCountMoreThan = (keyName, recordCount, sheetNumber) => {
  logger.info(`check xls parsed json in ${keyName} contains minium ${recordCount} data rows`);

  return cy.then(() => {
    const parsedOutput = JSON.parse(JSON.stringify(globalStore.getXLSParsedJSON(keyName)));
    const { sheetContents } = parsedOutput;

    // recordCount + 1 to ignore header row
    expect(sheetContents[sheetNumber || 0].length).to.be.greaterThan(recordCount + 1);
  });
};

/**
 * validate cell value by column and row index number
 * @param keyName where parsed json is stored
 * @param columnNumber index start with 0
 * @param rowNumber index start with 0
 * @param value string or number
 * @param sheetNumber sheetNumber default to first sheet 0
 * @returns
 */
const isHavingCellValue = (keyName, columnNumber, rowNumber, value, sheetNumber) => {
  logger.info(`check xls parsed json in ${keyName} contains cell \n`
      + `column number ${columnNumber} row number ${rowNumber} with value ${value}`);

  return cy.then(() => {
    const parsedOutput = JSON.parse(JSON.stringify(globalStore.getXLSParsedJSON(keyName)));
    const { sheetContents } = parsedOutput;
    const sheetContent = sheetContents[sheetNumber || 0];

    // row and column index start with zero
    expect(sheetContent[rowNumber][columnNumber]).to.be.equals(value);
  });
};

/**
 * validate all columns names in order
 * @param keyName where parsed json is stored
 * @param columnNamesArray column names in same order
 * @param sheetNumber sheetNumber default to first sheet 0
 * @returns
 */
const isHavingColumnNames = (keyName, columnNamesArray, sheetNumber) => {
  logger.info(`check xls parsed json in ${keyName} is having valid columns names`);

  return cy.then(() => {
    const parsedOutput = JSON.parse(JSON.stringify(globalStore.getXLSParsedJSON(keyName)));
    const { sheetContents } = parsedOutput;
    const sheetContent = sheetContents[sheetNumber || 0];

    expect(sheetContent[0]).to.be.deep.equals(columnNamesArray);
  });
};

/**
 * validate all sheet names
 * @param keyName where parsed json is stored
 * @param sheetNamesArray sheet names Array
 * @returns
 */
const isHavingSheetNames = (keyName, sheetNamesArray) => {
  logger.info(`check xls parsed json in ${keyName} contains valid sheet name ${sheetNamesArray.join()}`);

  return cy.then(() => {
    const parsedOutput = JSON.parse(JSON.stringify(globalStore.getXLSParsedJSON(keyName)));
    const { sheetNames } = parsedOutput;

    expect(sheetNames).to.be.deep.equals(sheetNamesArray);
  });
};

export default {
  FILE_DOWNLOAD_BASE_PATH,
  FILE_UPLOAD_BASE_PATH,
  checkXLSFileExists,
  createXLSFromJson,
  createXLSXFile,
  storeParsedXLStoJSON,
  isHavingCellValue,
  isHavingColumnNames,
  archiveExcelFile,
  isHavingDataRowCountMoreThan,
  isHavingSheetNames,
};
