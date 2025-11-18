import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nikhil Khemsingh Rathod </span>
            from <span className="purple"> Belagavi, India.</span>
            <br />
            I am currently working as an Associate Software Developer at Doshaheen Solution Pvt Ltd.
            <br />
            I have completed my Engineering Degree from Jain College of Engineering, Belagavi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar and Ukulele
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The beautiful thing about learning is that no one can take it away from you!"{" "}
          </p>
          <footer className="blockquote-footer">Nikhil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
