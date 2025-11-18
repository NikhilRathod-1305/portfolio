import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ticTacToe from "../../Assets/Projects/tic_tac_toe_game.png";
import finalCountdown from "../../Assets/Projects/almost_final_countdown_game.png";
import investmentCalc from "../../Assets/Projects/investment_calculator.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticTacToe}
              isBlog={false}
              title="Tic Tac Toe Game"
              description="Interactive Tic Tac Toe game built with React.js featuring a clean UI, player turn indicators, win detection logic, and game reset functionality. Demonstrates component state management and conditional rendering."
              ghLink="https://github.com/NikhilRathod-1305"
              demoLink="https://tic-tac-toe-game-tawny-chi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finalCountdown}
              isBlog={false}
              title="The Almost Final Countdown"
              description="A countdown timer game built with React featuring multiple difficulty levels, real-time countdown, score tracking, and responsive design. Implements React hooks for state management and timer functionality."
              ghLink="https://github.com/NikhilRathod-1305"
              demoLink="https://the-almost-final-countdown-game-zeta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={investmentCalc}
              isBlog={false}
              title="Investment Calculator"
              description="Financial calculator application built with React that computes investment returns over time. Features dynamic calculations, input validation, formatted number display, and responsive design for easy financial planning."
              ghLink="https://github.com/NikhilRathod-1305"
              demoLink="https://investment-project-eight.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
