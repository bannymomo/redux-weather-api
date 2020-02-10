import { CHANGE_UNIT, SEARCH } from "../actions/navActions";

const intialState = {
  inputValue: "",
  dataUnit: "celsius"
};

const navigation = (state = intialState, action) => {
  switch (action.type) {
    case CHANGE_UNIT:
      return {
        ...state,
        dataUnit: state.dataUnit === "celsius" ? "Fahrenheit" : "celsius"
      };
    case SEARCH:
      return {
        ...state,
        inputValue: action.payload
      };

    default:
      return state;
  }
};

export default navigation;
