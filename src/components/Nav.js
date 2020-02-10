import React from "react";
import { connect } from "react-redux";
import { changeDataUnit, updateSearch } from "../redux/actions/navActions";
import { fetchDataThunkAction } from "../redux/actions/weatherActions";

function Nav(props) {
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  function handleSearch() {
    const str = props.inputValue;
    const strArray = str.split(",");
    const city = strArray[0];
    const cc = strArray[1];
    props.fetchWeatherData(city, cc);
  }

  return (
    <nav>
      <input
        onKeyDown={handleKeyPress}
        value={props.inputValue}
        placeholder="brisbane,au"
        className="search-input"
        onChange={event => props.updateSearch(event.target.value)}
      />
      <button onClick={handleSearch} className="search-btn">
        <i className="fa fa-search"></i>
      </button>

      <button onClick={() => props.changeDataUnit()} className="temp-switch">
        <i className="fa fa-thermometer-empty thermometer"></i>
        <sup>°</sup>
        {props.dataUnit === "celsius" ? "C" : "F"}
      </button>
    </nav>
  );
}

const mapStateToProps = state => {
  return {
    inputValue: state.navigation.inputValue
  };
};

const mapDispatchToProps = dispatch => ({
  changeDataUnit: () => dispatch(changeDataUnit()),
  updateSearch: value => dispatch(updateSearch(value)),
  fetchWeatherData: (city, cc) => dispatch(fetchDataThunkAction(city, cc))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
