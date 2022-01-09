const logLevels = {
  silent: 'silent',
  error: 'error',
  warn: 'warn',
  info: 'info',
  debug: 'debug',
};

/**
 * Log level score is used to print levels below default level
 * For example: when level is debug it will print all logs with score <= 3
 */
const logLevelScore = {
  [logLevels.silent]: 0,
  [logLevels.error]: 1,
  [logLevels.warn]: 2,
  [logLevels.info]: 3,
  [logLevels.debug]: 4,
};

export default {
  logLevels,
  logLevelScore,
  defaultLogLevel: logLevels.info,
};
