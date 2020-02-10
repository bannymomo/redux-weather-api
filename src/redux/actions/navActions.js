export const SEARCH = "SEARCH";
export const CHANGE_UNIT = "CHANGE_UNIT";

export const updateSearch = value => ({
  type: SEARCH,
  payload: value
});

export const changeDataUnit = () => ({ type: CHANGE_UNIT });
