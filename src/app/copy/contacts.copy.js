import commonConfig from '../config/common.config';

const { english, spanish } = commonConfig.SITE_LANGUAGES;

export const MENU_TITLE = {
  [english]: 'Contacts',
  [spanish]: 'Contactos',
};

export const CONTACT_TYPE = {
  analysisCompany: {
    [english]: 'Analysis comp.',
    [spanish]: 'Certificadora',
  },
};
