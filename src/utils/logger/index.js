import logger from '../browser/cypress/logger';

const logFormat = (message, component, method) => {
  if (component || method) {
    return `${component}-${method}-${message}`;
  }
  return message;
};

/**
 * Information to log during execution
 * @param component [optional] component which is logging message
 * @param method  [optional] method which is logging message
 * @param message
 */
const info = (message, component, method) => {
  logger.info(logFormat(message, component, method));
};

/**
 * Warning information to log during execution
 * @param component [optional] component which is logging message
 * @param method  [optional] method which is logging message
 * @param message
 */
const warning = (message, component, method) => {
  logger.warn(logFormat(message, component, method));
};

/**
 * Debug information to log during execution
 * @param component [optional] component which is logging message
 * @param method  [optional] method which is logging message
 * @param message
 */
const debug = (message, component, method) => {
  logger.debug(logFormat(message, component, method));
};

/**
 * Error information to log during execution
 * @param component [optional] component which is logging message
 * @param method  [optional] method which is logging message
 * @param message
 */
const error = (message, component, method) => {
  logger.error(logFormat(message, component, method));
};

export default {
  info,
  warning,
  debug,
  error,
};
