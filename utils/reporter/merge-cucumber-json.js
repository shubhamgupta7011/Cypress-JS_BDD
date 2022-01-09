/* eslint-disable prefer-template, func-names, prefer-arrow-callback */
/* eslint-disable @typescript-eslint/no-var-requires, no-console */
const fs = require('fs');
const path = require('path');
const packageJson = require('../../package.json');

const jsonFolderPath = packageJson['cypress-cucumber-preprocessor'].cucumberJson.outputFolder;
const outputFolder = path.join(process.cwd(), jsonFolderPath, 'merged');
const outputFileName = 'cucumber.json';
const outputJson = [];

function createOutputFolder() {
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  } else {
    console.log('Merge folder already exists!!');
  }
}

function writeOutputJsonFile() {
  const outputFilePath = path.join(outputFolder, outputFileName);
  const outputData = JSON.stringify(outputJson, null, 2);
  fs.writeFileSync(outputFilePath, outputData, { encoding: 'utf-8' });
  console.log('Cucumber json merge success!! \nOutput file ' + outputFileName);
}

function mergeJsonFiles() {
  fs.readdir(jsonFolderPath, function (err, files) {
    if (err) {
      console.error(`ERROR: Folder ./${jsonFolderPath} not found. MERGE CANNOT BE PERFORMED!`);
      process.exit(1);
    }

    files.forEach(function (file) {
      if (file.includes('.json')) {
        console.log('Merging file: ' + file);
        const filePath = path.join(process.cwd(), jsonFolderPath, file);
        const fileContents = fs.readFileSync(filePath, { encoding: 'utf-8' });
        outputJson.push(JSON.parse(fileContents)[0]);
      }
    });

    if (outputJson.length > 0) {
      createOutputFolder();
      writeOutputJsonFile();
    } else {
      console.warn('Nothing to merge!!');
    }
  });
}

mergeJsonFiles();
