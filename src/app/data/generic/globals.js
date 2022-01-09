const batchNumbersMap = new Map();
const XLSParsedJSONMap = new Map();

const getBatchNumber = (key) => {
  return batchNumbersMap.get(key) || 'undefined';
};

const setBatchNumber = (key, value) => {
  batchNumbersMap.set(key, value);
};

const getXLSParsedJSON = (key) => {
  return XLSParsedJSONMap.get(key) || 'undefined';
};

const setXLSParsedJSON = (key, value) => {
  XLSParsedJSONMap.set(key, value);
};

export default {
  getBatchNumber,
  setBatchNumber,
  getXLSParsedJSON,
  setXLSParsedJSON,
};
