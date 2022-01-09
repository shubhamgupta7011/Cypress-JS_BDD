/* eslint-disable @typescript-eslint/no-var-requires, no-console */
const report = require('multiple-cucumber-html-reporter');
const fs = require('fs');
const attachment = require('./attachment.js');

const reportBaseFolder = './reports/';
const reportFolder = `${reportBaseFolder}html`;
const cucumberJsonDir = `${reportBaseFolder}cucumber-json`;
const screenshotsDir = `${reportBaseFolder}screenshots`;

const generateReport = (jsonFolder, outputFolder) => {
  console.log('Generating html reprot');
  if (!fs.existsSync(jsonFolder)) {
    console.error(`ERROR: Folder ./${jsonFolder} not found. REPORT CANNOT BE CREATED!`);
    process.exit(1);
  } else {
    report.generate({
      jsonDir: jsonFolder,
      reportPath: outputFolder,
      saveCollectedJSON: false,
      reportName: `Test Mangement - ${new Date().toLocaleString()}`,
      disableLog: true,
    });
  }
};

attachment.addScreenshotToReport(cucumberJsonDir, screenshotsDir);
generateReport(cucumberJsonDir, reportFolder);
