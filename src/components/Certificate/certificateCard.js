import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiOutlineEye } from "react-icons/ai";
import './Certificate.css';

function CertificateCard(props) {
  return (
    <Card className="project-card-view certificate-card">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", flexGrow: 1 }}>
          {props.description}
        </Card.Text>
        <Button
          variant="primary"
          href={props.credentialLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "auto" }}
        >
          <AiOutlineEye style={{ marginRight: "8px" }} /> Show Credential
        </Button>
      </Card.Body>
    </Card>
  );
}
export default CertificateCard;
