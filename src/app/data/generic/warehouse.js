const ABC_LIST = {
  abc: '',
  def: '',
};

const DEF_LIST = {
  W2022: '',
  S2022: '',
  W2021: '',
  S2021: '',
};

const SECTION_LIST = {
  WOMAN: 'WOMAN',
  MAN: 'MAN',
  CHILDREN: 'CHILDREN',
};

const WAREHOUSE_WITH_SEASON = {
  primary: {
    warehouse: ABC_LIST.abc,
    season: DEF_LIST.W2021,
  },
  secondary: {
    warehouse: ABC_LIST.def,
    season: DEF_LIST.S2021,
  },
};

export default {
  WAREHOUSE_WITH_SEASON,
  SECTION_LIST,
};
