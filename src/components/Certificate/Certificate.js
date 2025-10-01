import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../Projects/Projects.css';
import './Certificate.css';
import CertificateCard from "./certificateCard";
import Particle from "../Particle/Particle";

function Certificate() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch('/certificates.json')
      .then(response => response.json())
      .then(data => setCertificates(data))
      .catch(error => console.error('Error fetching certificates:', error));
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the certificates I've earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {certificates.map((cert, index) => {
            let imgPath;
            if (cert.title.includes("Web")) {
              imgPath = require("../../Assets/Certificate/web.png");
            } else if (cert.title.includes("Blockchain")) {
              imgPath = require("../../Assets/Certificate/blockchain.png");
            } else {
              imgPath = require(`../../Assets/${cert.imgPath}`);
            }
            return (
              <Col md={4} className="project-card" key={index}>
                <CertificateCard
                  imgPath={imgPath}
                  title={cert.title}
                  description={cert.description}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
