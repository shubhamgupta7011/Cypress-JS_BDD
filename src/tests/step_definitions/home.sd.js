import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import logger from '../../utils/logger';
import home from '../../app/pages/Home.page';

Given('Open google', () => {
  logger.info('Open google');
  home.loginToTestManagementApp();
});

Then('User should see search popup by default', () => {
  logger.info('check default popup title');
  home.validateDefaultPopupTitle();
});
