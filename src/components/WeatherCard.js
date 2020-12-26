import React from "react";
import { Card } from "react-bootstrap";
import "./card.css";

function WeatherCard(props) {
  return (
    <Card>
      <img src={props.src} alt="icon_image" />
      <Card.Body>
        <Card.Title>
          <button>{props.name}</button>
        </Card.Title>
        <Card.Text>
          <button>{props.description}</button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WeatherCard;
