import { combineReducers } from "redux";

import navigation from "./navReducers";
import weather from "./weatherReducers";

export default combineReducers({
  navigation,
  weather
});
