import {
  CHANGE_LIMIT,
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../actions/weatherActions";

const intialState = {
  city: "",
  weatherForecasts: [],
  weatherCurrent: {},
  dataLimit: 5,
  isloading: false,
  error: null
};

const weather = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isloading: true,
        error: null
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isloading: false,
        weatherForecasts: action.payload.forecast.slice(0, 10),
        weatherCurrent: action.payload.current,
        city: action.payload.city.name
      };

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.payload.message
      };

    case CHANGE_LIMIT:
      return {
        ...state,
        dataLimit: action.payload
      };

    default:
      return state;
  }
};

export default weather;
