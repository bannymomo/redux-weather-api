import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/main/Main";
import Footer from "./components/Footer";
import { connect } from "react-redux";
import { fetchDataThunkAction } from "./redux/actions/weatherActions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchWeatherData("brisbane", "au");
  }

  render() {
    return (
      <div
        className="weather-channel__container"
        data-aos="zoom-out"
        data-aos-delay="400"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchWeatherData: (city, cc) => dispatch(fetchDataThunkAction(city, cc))
});

export default connect(null, mapDispatchToProps)(App);
