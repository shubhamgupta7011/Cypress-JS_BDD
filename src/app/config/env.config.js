const ENV_NAMES = {
  ftenv1: 'pre1',
  ftenv2: 'pre2',
  uatenv1: 'pru1',
};

const DEFAULT_ENVIRONMENT = ENV_NAMES.ftenv1;

const ENV_URLS = {
  [ENV_NAMES.ftenv1]: 'https://www.google.com/',
  [ENV_NAMES.ftenv2]: 'https://www.google.com/',
  [ENV_NAMES.uatenv1]: 'https://www.google.com/',
};

const API_END_URLS = {
  fileUpload: '',
  fileDownload: '',
};

export default {
  API_END_URLS,
  DEFAULT_ENVIRONMENT,
  ENV_NAMES,
  ENV_URLS,
};
