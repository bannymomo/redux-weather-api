import getWeatherData from "../../utils/axios";
export const CHANGE_LIMIT = "CHANGE_LIMIT";
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchData = () => ({
  type: FETCH_DATA
});

export const fetchDataSuccess = weatherData => ({
  type: FETCH_DATA_SUCCESS,
  payload: weatherData
});

export const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: error
});

export const changeDataLimit = limit => ({
  type: CHANGE_LIMIT,
  payload: limit
});

export const fetchDataThunkAction = (city, cc) => dispatch => {
  dispatch(fetchData());
  getWeatherData(city, cc)
    .then(response => {
      dispatch(fetchDataSuccess(response.data.data));
    })
    .catch(error => {
      dispatch(fetchDataFailure(error));
    });
};
