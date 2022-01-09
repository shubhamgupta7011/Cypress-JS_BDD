/* eslint-disable no-unused-vars */
// import XLSX from 'xlsx';
const fs = require('fs');
const Exceljs = require('exceljs');
const XLSX = require('xlsx');

const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');
const resolve = require('resolve');

/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  const options = browserify.defaultOptions;

  on('file:preprocessor', cucumber(options));

  on('task', {
    log(message) {
      // eslint-disable-next-line no-console
      console.log(message);
      return null;
    },
  });

  on('task', {
    moveFile(fileMoveDetails) {
      return new Promise((_resolve, _reject) => {
        const { newPath, srcPath, fileName } = fileMoveDetails;
        // checking newPath folder is exists and if not create them
        if (!fs.existsSync(newPath)) { fs.mkdirSync(newPath); }

        fs.rename(srcPath, `${newPath}/${fileName}`, (err) => {
          if (err) {
            _reject(new Error(`${err}`));
          }
          _resolve('Successfully renamed or moved!');
        });
      });
    },
  });

  on('task', {
    parseXLSContents(fileName) {
      const parsedXLSOutput = {
        sheetNames: [],
        sheetContents: [],
      };

      return new Promise((_resolve, _reject) => {
        const workBook = XLSX.readFile(fileName);

        if (workBook.SheetNames) {
          parsedXLSOutput.sheetNames = workBook.SheetNames;

          workBook.SheetNames.forEach((value) => {
            const workSheet = workBook.Sheets[value];
            const sheetContent = XLSX.utils.sheet_to_json(workSheet, { header: 1, raw: true });
            if (JSON.parse(JSON.stringify(sheetContent))) {
              parsedXLSOutput.sheetContents.push(JSON.parse(JSON.stringify(sheetContent)));
            }
          });

          _resolve(parsedXLSOutput);
        }

        _reject(new Error(`Unable to parse file to json \n ${fileName}`));
      });
    },
  });

  on('task', {
    createXLSFromJson(fileDetails) {
      const { fileName, sheetNames, sheetContents } = fileDetails;
      return new Promise((_resolve, _reject) => {
        try {
          if (sheetNames.length !== sheetContents.length) {
            _reject(new Error(`Unable to create file ${fileName} \n`
              + 'sheetnames and sheetContents is not matching'));
          }
          const workBook = XLSX.utils.book_new();
          // prepare sheets based on lenght passed
          sheetNames.forEach((value, index) => {
            const workSheet = XLSX.utils.json_to_sheet(sheetContents[index]);
            XLSX.utils.book_append_sheet(workBook, workSheet, value);
          });
          XLSX.writeFile(workBook, fileName);
          _resolve(null);
        } catch (e) {
          _reject(new Error(`Unable to create file \n ${fileName}`));
        }
      });
    },
  });

  on('task', {
    createXLSXFileExcelJS(fileDetails) {
      const {
        fileName, sheetNames, columnsNames, sheetContents,
      } = fileDetails;
      return new Promise((_resolve, _reject) => {
        try {
          if (sheetNames.length !== columnsNames.length) {
            _reject(new Error(`Unable to create file ${fileName} \n`
            + 'sheetnames and column names are not matching'));
          }
          const wb = new Exceljs.Workbook();
          sheetNames.forEach((value, index) => {
            const workSheet = wb.addWorksheet(value);
            workSheet.columns = columnsNames[index];
            workSheet.addRows(sheetContents[index]);
          });
          wb.xlsx.writeFile(fileName);
          _resolve(null);
        } catch (e) {
          _reject(new Error(`Unable to create file \n ${fileName}`));
        }
      });
    },
  });
};
