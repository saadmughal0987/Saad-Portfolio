import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Projects.css';
import ProjectCard from "./ProjectCards";
import Particle from "../Particle/Particle";
import gym from "../../Assets/Projects/Gym.png";
import shop from "../../Assets/Projects/shopco.png";
import pswrd from "../../Assets/Projects/pswrdGenerator.png";
import gym2 from "../../Assets/Projects/Gym2.png";


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
              imgPath={gym2}
              isBlog={false}
              title="Structurre Health & Fitness"
              description="A modern and responsive Gym website developed using React and Bootstrap. It features sections for workout programs, trainers, membership plans, and a contact form. The project ensures a clean UI, mobile responsiveness, and smooth user interaction with API integration for dynamic functionality."
              ghLink="https://github.com/saadmughal0987/structure-health-and-fitness-bu-react"
              demoLink="https://structure-health-and-fitness-bu-rea.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Shop.co"
              description="An e-commerce website where users can browse products, add them to cart, and checkout securely. Developed with React.js and integrated with modern UI frameworks like  Bootstrap. Focused on smooth shopping experience, product filtering, and responsive design."
              ghLink="https://github.com/saadmughal0987/shop.co"
              demoLink="https://shop-co-bay-seven.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pswrd}
              isBlog={false}
              title="Password Generator"
              description="A password generator application that allows users to create secure passwords based on custom dependencies like range, uppercase, lowercase, and special characters. Built with modern JavaScript, it ensures flexibility, strong password creation, and an easy-to-use interface for enhanced security."
              ghLink="https://github.com/saadmughal0987/Password-Generator"
              demoLink="https://password-generator-jet-delta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Structure Health & Fitness"
              description="A modern and responsive Gym website designed for a fitness center. It includes sections for workout programs, trainers, membership plans, and a contact form. Built with Html , CSS , JavaScript and API to ensure a clean, user-friendly, and mobile-friendly design."
              ghLink="https://github.com/saadmughal0987/structure_health_and_fitness_website"
              demoLink="https://structure-health-and-fitness-websit.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
