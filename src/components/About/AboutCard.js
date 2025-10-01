import React from "react";
import Card from "react-bootstrap/Card";
import './About.css';
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Saad </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            I am currently involed as a  developer in many language like JS ,CSS , Java C++ and also frameworks.
            <br />
            I am pursuing Bachelor's degree in Software Engineering (BSSE) at UCP
            Lahore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Exersice
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Muhammad Saad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
