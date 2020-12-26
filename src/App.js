import React, { useEffect } from "react";
import Header from "./components/Header";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import { CountryProvider } from "./components/enteredCountryContext";
import WeatherResults from "./components/WeatherResults";

function App() {
  const [countryName, setCountryName] = React.useState("");

  function changeName(newName) {
    setCountryName(newName);
  }

  useEffect(() => {
    setCountryName("");
  }, []);

  return (
    <CountryProvider>
      <BrowserRouter>
        <Route path="/" exact>
          <Header name={countryName} changeCountry={changeName} />
        </Route>
        <Route path="/weatherResults">
          <WeatherResults name={countryName} />
        </Route>
      </BrowserRouter>
    </CountryProvider>
  );
}

export default App;
