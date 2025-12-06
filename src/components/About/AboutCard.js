import React from "react";
import Card from "react-bootstrap/Card";
import './About.css';
import { ImPointRight } from "react-icons/im";
import { personalData } from "../../data/personalData";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{personalData.name} </span>
            from <span className="purple"> {personalData.location}.</span>
            <br />
            {personalData.bio.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <ul>
            {personalData.activities.map((activity, index) => (
              <li key={index} className="about-activity">
                <ImPointRight /> {activity}
              </li>
            ))}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{personalData.quote}"{" "}
          </p>
          <footer className="blockquote-footer">{personalData.name}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
