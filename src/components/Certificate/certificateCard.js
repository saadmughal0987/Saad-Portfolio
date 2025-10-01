import React from "react";
import Card from "react-bootstrap/Card";
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
      </Card.Body>
    </Card>
  );
}
export default CertificateCard;
