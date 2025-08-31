import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gym from "../../Assets/Projects/Gym.png";
import shop from "../../Assets/Projects/shopco.png";

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

          {/* Gym Website */}
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

          {/* Ecommerce Website */}
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

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
