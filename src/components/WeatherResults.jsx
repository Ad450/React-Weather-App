import React from "react";

import "./header.css";
//import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

function WeatherResults(props) {
  const [weatherList, setWeatherList] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);
  const [weatherIcon, setWeatherIcon] = React.useState("");

  const apiKey = "76bfd81bd0dbe71435ec73cff5286e8e";
  const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.name}&appid=${apiKey}`;

  const abortController = new AbortController();

  React.useEffect(() => {
    fetchData().then(() => {
      setIsLoading(false);
    });

    return () => {
      abortController.abort();
    };
  });

  let imgIcon = "";

  const goBackStyles = {
    marginTop: "30px",
    maxWidth: "600px",
    marginRight: "auto",
    marginLeft: "auto",
    textAlign: "center",
  };

  const fetchData = async () => {
    const response = await fetch(fetchUrl, { signal: abortController.signal });
    const data = await response.json();
    console.log(data);
    if (data !== null) {
      setWeatherList(data.weather);
      if (weatherList.length !== 0) {
        if (weatherList[0] !== undefined && weatherList[0].icon !== undefined) {
          setWeatherIcon(
            `http://openweathermap.org/img/wn/${weatherList[0].icon}@2x.png`
          );
          console.log(`This is the weather url ${weatherIcon}`);
        }
      }
    }
  };

  if (props.name === "" && imgIcon === "") {
    return (
      <div>
        <div className="header">
          <h3 className="header-text">Weather Forecast</h3>
        </div>
        <div style={goBackStyles}>
          <h3>Please return to the previous page to enter a country or city</h3>
          <Link
            to="/"
            className="btn btn-outline-danger customButton"
            // style={styles}
          >
            GO BACK
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <h3 className="header-text">Weather Forecast</h3>
      </div>
      {isLoading ? (
        <h3 className="spinner">loading....</h3>
      ) : (
        <div className="weather-card">
          <h4 className="weather-header">{weatherList[0].description}</h4>
          <div>
            <img className="weather-image" src={weatherIcon} alt="icon_image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherResults;
