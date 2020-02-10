import React from "react";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";

function Main(props) {
  let mainContent;
  const errorContent = (
    <p className="error">
      Sorry, we didn't find the weather information for the city you are
      searching for, please try again and spell it according to the given search
      format, thank you for your cooperation.
    </p>
  );
  const loadingSpinner = (
    <div className="circle-progress">
      <CircularProgress size="10em" color="inherit" />
    </div>
  );
  const weatherContent = (
    <main>
      <CurrentWeather />
      <ForecastWeather />
    </main>
  );
  if (props.error) {
    mainContent =
      props.error === "Request failed with status code 404" ||
      props.error === "Request failed with status code 400" ? (
        errorContent
      ) : (
        <p className="error">Error : {props.error}</p>
      );
  } else if (props.isloading) {
    mainContent = loadingSpinner;
  } else {
    mainContent = weatherContent;
  }
  return mainContent;
}

const mapStateToProps = state => {
  return {
    isloading: state.weather.isloading,
    error: state.weather.error
  };
};

export default connect(mapStateToProps)(Main);
