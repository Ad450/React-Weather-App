import React from "react";

// create context
export const EnteredCountryContext = React.createContext();

export const CountryProvider = (props) => {
  const [enteredCountry, setEnteredCountry] = React.useState("emmanuel");

  // return the created context
  return (
    <EnteredCountryContext.Provider value={[enteredCountry, setEnteredCountry]}>
      {props.children}
    </EnteredCountryContext.Provider>
  );
};
