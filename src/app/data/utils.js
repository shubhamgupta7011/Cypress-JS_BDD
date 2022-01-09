import { v4 as uuidv4 } from 'uuid';

const date = new Date();

const CURRENT_DATE_STAMP_YYYYMMDD = `${date.getFullYear()}`
  + `${(date.getMonth() + 1).toString().padStart(2, '0')}` // janauary start from 01
  + `${date.getDate().toString().padStart(2, '0')}`;

const CURRENT_DATE_STAMP_DDMMYY = `${date.getDate().toString().padStart(2, '0')}/`
    + `${(date.getMonth() + 1).toString().padStart(2, '0')}/`
    + `${date.getFullYear().toString().substr(-2)}`;

const getYearsOldDateStampDDMMYY = (yearBack) => {
  return `${date.getDate().toString().padStart(2, '0')}/`
    + `${(date.getMonth() + 1).toString().padStart(2, '0')}/`
    + `${parseInt(date.getFullYear().toString().substr(-2), 10) - yearBack}`;
};

const getShortUUID = () => {
  return uuidv4().split('-').slice(0, 3).join('');// get first 3 portions of uuid
};

export default {
  CURRENT_DATE_STAMP_YYYYMMDD,
  CURRENT_DATE_STAMP_DDMMYY,
  getShortUUID,
  getYearsOldDateStampDDMMYY,
};
