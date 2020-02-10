import React from "react";
import WeatherForecastRow from "./WeatherForecastRow";
import { connect } from "react-redux";
import { changeDataLimit } from "../../redux/actions/weatherActions";
import { format } from "date-fns";

function ForecastWeather(props) {
  return (
    <section
      className="weather-forecast"
      data-aos="fade-left"
      data-aos-delay="400"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <div className="forecast__switch">
        <button
          onClick={() => props.changeDataLimit(5)}
          className={
            props.dataLimit === 5
              ? "forecast__switch_0 switch-active"
              : "forecast__switch_0"
          }
        >
          5 items
        </button>
        <button
          onClick={() => props.changeDataLimit(10)}
          className={
            props.dataLimit === 10
              ? "forecast__switch_1 switch-active"
              : "forecast__switch_1"
          }
        >
          10 items
        </button>
      </div>

      {props.weatherForecasts.slice(0, props.dataLimit).map(forecast => {
        const date = new Date(forecast.time * 1000);
        const day = format(date, "EEE");
        const time = format(date, "HH:mm");

        return (
          <WeatherForecastRow
            key={day + time}
            day={day}
            time={time}
            tempHigh={
              props.dataUnit === "celsius"
                ? forecast.maxCelsius + " C"
                : forecast.maxFahrenheit + " F"
            }
            tempLow={
              props.dataUnit === "celsius"
                ? forecast.minCelsius + " C"
                : forecast.minFahrenheit + " F"
            }
          />
        );
      })}
    </section>
  );
}

const mapStateToProps = state => {
  return {
    dataLimit: state.weather.dataLimit,
    dataUnit: state.navigation.dataUnit,
    weatherForecasts: state.weather.weatherForecasts
  };
};

const mapDispatchToProps = dispatch => ({
  changeDataLimit: limit => dispatch(changeDataLimit(limit))
});

export default connect(mapStateToProps, mapDispatchToProps)(ForecastWeather);
