import logger from '../logger';
import commands from './cypress/commands';
import * as browserConfig from './browser-config';
import apiConfig from './api-config';

/**
 * Interface class for browser interaction methods
 * all methods will be implented in tools specific to browser automation tool selected.
 */
class Browser {
  constructor() {
    this.apiConfig = apiConfig;
    this.browserConfig = browserConfig;
  }

  /**
   * Config/Start browser and set all pre-conditons specific to tool
   *
   * @returns {this} for command chaining
   */
  configBrowser() {
    commands.configBrowser();
    return this;
  }

  /**
   * Open the url with basic authentication
   *
   * username and password in passed via run time process parameters
   * @param {String} url
   * @param username
   * @param password
   * @param  {Number} timeout
   * @returns {this} for command chaining
   */
  openUrlBasicAuth(
    url, username, password, { timeout } = { timeout: browserConfig.PAGE_LOAD_TIMEOUT },
  ) {
    logger.info(`browser launch with user ${username} to url ${url}`);

    commands.openUrlBasicAuth(url, username, password, { timeout });
    return this;
  }

  /**
   * Navigate to the url
   *
   * @param {String} url
   * @param  {Number} timeout
   * @returns {this} for command chaining
   */
  gotoUrl(
    url, { timeout } = { timeout: browserConfig.PAGE_LOAD_TIMEOUT },
  ) {
    logger.info(`browser navigate to url ${url}`);

    commands.gotoUrl(url, { timeout });
    return this;
  }

  /**
   * get the element
   * @param {string} selector of get the element
   * @param {object} options
   * @returns {this} for command chaining
   */
  // eslint-disable-next-line class-methods-use-this
  getElement(
    selector, { timeout } = { timeout: browserConfig.ELEMENT_TIMEOUT_SHORT },
  ) {
    logger.info(`browser get element ${selector}`);

    return commands.getElement(selector, { timeout });
  }

  /**
   * click the element
   * @param {string} selector of element to clicked
   * @param {object} options
   * @returns {this} for command chaining
   */
  click(
    selector, { timeout } = { timeout: browserConfig.ELEMENT_TIMEOUT_SHORT },
  ) {
    logger.info(`browser click element ${selector}`);

    commands.click(selector, { timeout });
    return this;
  }

  /**
   * wait for timeout
   * @returns {this} for command chaining
   * @param timeout
   */
  clockWait(timeout = browserConfig.DEFAULT_CLOCK_WAIT) {
    logger.info(`clock wait for ${timeout} milli-seconds`);

    commands.clockWait(timeout);
    return this;
  }

  /**
   * double click on the element
   * @param {string} selector of element to clicked
   * @param {object} options
   * @returns {this} for command chaining
   */
  doubleClick(
    selector, { timeout } = { timeout: browserConfig.ELEMENT_TIMEOUT_SHORT },
  ) {
    logger.info(`browser double click element ${selector}`);

    commands.doubleClick(selector, { timeout });
    return this;
  }

  /**
   * enter value to the input fields
   * @param {string} selector
   * @param {string} value
   * @param options
   * @returns {this} for command chaining
   */
  type(
    selector, value, { timeout } = { timeout: browserConfig.ELEMENT_TIMEOUT_SHORT },
  ) {
    logger.info(`browser element ${selector} type value ${value}`);

    commands.type(selector, value, { timeout });
    return this;
  }

  /**
   * Check the Checkbox or Radio button
   * @param {string} selector
   * @param {object} options option.timeout number
   * @returns {this} for command chaining
   */
  check(
    selector, { timeout } = { timeout: browserConfig.ELEMENT_TIMEOUT_SHORT },
  ) {
    logger.info(`browser check element ${selector}`);

    commands.check(selector, { timeout });
    return this;
  }

  /**
   * Un-Check the Checkbox or Radio button
   * @param {string} selector
   * @param {object} options option.timeout number
   * @returns {this} for command chaining
   */
  unCheck(
    selector, { timeout } = { timeout: browserConfig.ELEMENT_TIMEOUT_SHORT },
  ) {
    logger.info(`browser un-check element ${selector}`);

    commands.unCheck(selector, { timeout });
    return this;
  }

  /**
   * select selectbox option by index
   * @param {string} selector
   * @param {number} index
   * @param {object} options timeout
   * @returns {this} for command chaining
   */
  selectByIndex(
    selector, index, { timeout } = { timeout: browserConfig.ELEMENT_TIMEOUT_SHORT },
  ) {
    logger.info(`browser select ${selector} option by index ${index}`);

    commands.selectByIndex(selector, index, { timeout });
    return this;
  }

  /**
   * select selectbox option by text
   * @param {string} selector
   * @param {string} visibleText
   * @param {object} options timeout
   * @returns {this} for command chaining
   */
  selectByText(
    selector, visibleText, { timeout } = { timeout: browserConfig.ELEMENT_TIMEOUT_SHORT },
  ) {
    logger.info(`browser select ${selector} option by visible text ${visibleText}`);

    commands.selectByText(selector, visibleText, { timeout });
    return this;
  }

  /**
   * select selectbox option by value
   * @param {string} selector
   * @param {string} value
   * @param {object} options timeout
   * @returns {this} for command chaining
   */
  selectByValue(
    selector, value, { timeout } = { timeout: browserConfig.ELEMENT_TIMEOUT_SHORT },
  ) {
    logger.info(`browser select ${selector} option by value ${value}`);

    commands.selectByValue(selector, value, { timeout });
    return this;
  }

  /**
   * Get the title of the page
   * @param { timeout} options
   * @returns {this} for command chaining
   */
  getTitle(
    { timeout } = { timeout: browserConfig.ELEMENT_TIMEOUT_SHORT },
  ) {
    logger.info('browser get page title');

    commands.getTitle({ timeout });
    return this;
  }

  /**
   * Click browse to select file and load into browser
   * @param selector browse element which invoke file browser window
   * @param filePath file path with name and extention
   * @param options
   * @returns browser command chaining
   */
  browseFile(
    selector, filePath, { timeout, setFileName } = { timeout: browserConfig.ELEMENT_TIMEOUT_SHORT, setFileName: 'test.xlsx' },
  ) {
    logger.info(`browse excel ${filePath} file into ${selector} for upload`);

    commands.browseFile(selector, filePath, { timeout, setFileName });
    return this;
  }

  /**
   * Start watching for brower api/http call
   * @param watchName unique watch name
   * @param options
   * @returns browser command chaining
   */
  watchForApiCall(
    watchName, { url, method },
  ) {
    logger.info(`start watching ${watchName} for api/http call ${url}`
      + ` method ${method} to complete`);
    commands.watchForApiCall(
      watchName, { url, method },
    );
    return this;
  }

  /**
   * Wait for brower api/http call complete with status code
   * @param watchName unique watch name
   * @param options
   * @returns {this} for command chaining
   */
  waitForAPIStatusCode(
    watchName, {
      url, method, statusCode, timeout = browserConfig.API_CALL_TIMEOUT,
    },
  ) {
    logger.info(`wait for ${watchName} browser call ${url}, method ${method},`
      + `complete with status code ${statusCode}`);
    commands.waitForAPIStatusCode(
      watchName,
      {
        url,
        method,
        statusCode,
        timeout,
      },
    );
    return this;
  }

  /**
   * Check if element text
   * @param {string} selector
   * @param {string} textValue
   * @param {object} options timeout
   * @returns {this} for command chaining
   */
  isHavingText(
    selector, textValue, { timeout } = { timeout: browserConfig.ELEMENT_TIMEOUT_LONG },
  ) {
    logger.info(`Is browser element ${selector} having text ${textValue}`);

    commands.isHavingText(selector, textValue, { timeout });
    return this;
  }

  /**
   * Check if checkbox is selected
   * @param {string} selector
   * @param {object} options timeout
   * @returns {this} for command chaining
   */
  isChecked(
    selector, { timeout } = { timeout: browserConfig.ELEMENT_TIMEOUT_LONG },
  ) {
    logger.info(`Is browser element ${selector} is checked`);

    commands.isChecked(selector, { timeout });
    return this;
  }

  /**
   * Check if element text
   * @param {string} selector
   * @param {string} textValue
   * @param {object} options timeout
   * @returns {this} for command chaining
   */
  isHavingValue(
    selector, textValue, { timeout } = { timeout: browserConfig.ELEMENT_TIMEOUT_LONG },
  ) {
    logger.info(`Is browser element ${selector} having value ${textValue}`);

    commands.isHavingValue(selector, textValue, { timeout });
    return this;
  }

  /**
   * Check if element exists
   * @param {string} selector
   * @param {object} options timeout
   * @returns {this} for command chaining
   */
  isExists(
    selector, { timeout } = { timeout: browserConfig.ELEMENT_TIMEOUT_LONG },
  ) {
    logger.info(`Is browser element ${selector} exists`);

    commands.isExists(selector, { timeout });
    return this;
  }

  /**
   * Check if element not exists
   * @param {string} selector
   * @param {object} options timeout
   * @returns {this} for command chaining
   */
  isNotExist(
    selector, { timeout } = { timeout: browserConfig.ELEMENT_TIMEOUT_LONG },
  ) {
    logger.info(`Is browser element ${selector} is not exist`);

    commands.isNotExist(selector, { timeout });
    return this;
  }

  /**
   * Check if element is visible
   * @param {string} selector
   * @param {object} options timeout
   * @returns {this} for command chaining
   */
  isVisible(
    selector, { timeout } = { timeout: browserConfig.ELEMENT_TIMEOUT_LONG },
  ) {
    logger.info(`Is browser element ${selector} visible`);

    commands.isVisible(selector, { timeout });
    return this;
  }

  /**
   * check element is not visible
   * @param {string} selector
   * @param {object} options timeout
   * @returns {this} for command chaining
   */
  isNotVisible(
    selector, { timeout } = { timeout: browserConfig.ELEMENT_TIMEOUT_SHORT },
  ) {
    logger.info(`Is browser element ${selector} not visible`);

    commands.isNotVisible(selector, { timeout });
    return this;
  }

  /**
   * get the list of elements for multi element selector
   * @param {string} selector
   * @param {object} options timeout
   * @returns {Array} of elements
   */
  // eslint-disable-next-line class-methods-use-this
  getListOfElements(
    selector, { timeout } = { timeout: browserConfig.ELEMENT_TIMEOUT_SHORT },
  ) {
    logger.info(`get the list of elements for ${selector}`);

    return commands.getElements(selector, { timeout });
  }
}

export default Browser;
