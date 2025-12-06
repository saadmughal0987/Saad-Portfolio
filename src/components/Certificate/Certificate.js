import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../Projects/Projects.css';
import './Certificate.css';
import CertificateCard from "./certificateCard";
import { certificatesData } from "../../data/certificatesData";

function Certificate() {
  return (
    <Container fluid className="project-section" id="certificate">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the certificates I've earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {certificatesData.map((cert, index) => (
            <Col md={4} className="project-card" key={index}>
              <CertificateCard
                imgPath={cert.imgPath}
                title={cert.title}
                description={cert.description}
                credentialLink={cert.credentialLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
