import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { EnteredCountryContext } from "./enteredCountryContext";
import "./header.css";
import "./textfield.css";

function Header(props) {
  //  const [enteredCountry, setEnteredCountry] = useContext(EnteredCountryContext);
  const [isClicked, setIsClicked] = React.useState(false);

  // const [placeholder, setPlacehoder] = React.useState("enter country");

  function handleInputChange(event) {
    props.changeCountry(event.target.value);
  }

  const styles = {
    width: "100%",
  };

  function changeIsEmpty() {
    if (props.name === "") {
      setIsClicked(true);
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h3 className="header-text">Weather Forecast</h3>
      </div>
      <Form className="form-group">
        <Form.Group>
          <Form.Control
            placeholder="enter country"
            type="text"
            value={props.name}
            onChange={handleInputChange}
            className="form-control"
          />
        </Form.Group>
        {props.name !== "" ? (
          <Link
            to="/weatherResults"
            className="btn btn-outline-danger "
            style={styles}
          >
            CHECK WEATHER
          </Link>
        ) : (
          <Link
            to="/"
            className="btn btn-outline-danger "
            style={styles}
            onClick={changeIsEmpty}
          >
            CHECK WEATHER
          </Link>
        )}
      </Form>
      <div>
        {isClicked ? (
          <p className="country-empty">please enter a country</p>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
