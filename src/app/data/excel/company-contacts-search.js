import utils from '../utils';
import contactsUpload from './contacts-upload';

const FILE_NAME = `ContactExport_${utils.CURRENT_DATE_STAMP_YYYYMMDD}.xlsx`;

const COLUMN_NAMES = {
  identifier: contactsUpload.COLUMN_NAMES.identifier,
  companyName: contactsUpload.COLUMN_NAMES.companyName,
  analysisComp: contactsUpload.COLUMN_NAMES.analysisComp,
  analysisLab: contactsUpload.COLUMN_NAMES.analysisLab,
  supplier: contactsUpload.COLUMN_NAMES.supplier,
  pickingFactory: 'Picking factory',
  contactName: contactsUpload.COLUMN_NAMES.contactName,
  contactEmail: contactsUpload.COLUMN_NAMES.contactEmail,
  contactPhone: contactsUpload.COLUMN_NAMES.contactPhone,
};

const COLUMN_ORDER_ARRAY = [
  COLUMN_NAMES.identifier,
  COLUMN_NAMES.companyName,
  COLUMN_NAMES.analysisComp,
  COLUMN_NAMES.analysisLab,
  COLUMN_NAMES.supplier,
  COLUMN_NAMES.pickingFactory,
  COLUMN_NAMES.contactName,
  COLUMN_NAMES.contactEmail,
  COLUMN_NAMES.contactPhone,
];

export default {
  FILE_NAME,
  COLUMN_NAMES,
  COLUMN_ORDER_ARRAY,
};
