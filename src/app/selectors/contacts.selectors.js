import { menuByName } from './home.selectors';
import * as contactsCopy from '../copy/contacts.copy';
import * as popupCommon from './popup-common.selectors';

const { MENU_TITLE } = contactsCopy;

export const menuContacts = (siteLanguage) => {
  return menuByName(MENU_TITLE[siteLanguage]);
};

export const POPUP_TITLE = popupCommon.TITLE;

export const WAREHOUSE_INPUT = 'input[name="cbWhareHouse"]';

export const WAREHOUSE_DROPDOWN_IMG = 'input[name="cbWhareHouse"] + IMG';

export const warehouseDropdownOption = (option) => {
  return `//div[@role="listitem"][text()="${option}"]`;
};

export const SEASON_INPUT = 'input[name="cbSeasson"]';

export const SEASON_DROPDOWN_IMG = 'input[name="cbSeasson"] + IMG';

export const seasonDropdownOption = (option) => {
  return `//div[@role="listitem"][text()="${option}"]`;
};
