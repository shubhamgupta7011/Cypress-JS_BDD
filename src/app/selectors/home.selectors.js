import * as popupCommon from './popup-common.selectors';

// ********** START DYNAMIC SELECTORS ************** /
export const menuByName = (elementText) => {
  return `//td[@role="menuitem"][text()="${elementText}"]`;
};
// ********** END DYNAMIC SELECTORS ************** /

export const PAGE_TITLE = '.titulo-app';

export const POPUP_CLOSE_ICON = popupCommon.POPUP_CLOSE;

export const POPUP_TITLE = popupCommon.TITLE;
