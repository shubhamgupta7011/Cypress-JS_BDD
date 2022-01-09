/**
 * Logger module implemented to support cypress cli logging
 * implementation by using cy.task defined in the cypress plugin file
 * refer to index.js inside cypress Plugin folder
 */
import loggerConfig from '../../logger/logger.config';

const { logLevelScore, logLevels } = loggerConfig;

// process env variable access via cypress to set log level
const level = Cypress.env('loglevel') || loggerConfig.defaultLogLevel;

const messageFormat = (logLevel, message) => {
  return `${new Date().toISOString()} [${logLevel}] : ${message}`;
};

const debug = (message) => {
  if (logLevelScore[level] >= logLevelScore.debug) {
    cy.task('log', messageFormat(logLevels.debug, message));
  }
};
const error = (message) => {
  if (logLevelScore[level] >= logLevelScore.error) {
    cy.task('log', messageFormat(logLevels.error, message));
  }
};

const info = (message) => {
  if (logLevelScore[level] >= logLevelScore.info) {
    cy.task('log', messageFormat(logLevels.info, message));
  }
};

const warn = (message) => {
  if (logLevelScore[level] >= logLevelScore.warn) {
    cy.task('log', messageFormat(logLevels.warn, message));
  }
};

export default {
  debug,
  error,
  info,
  warn,
};
