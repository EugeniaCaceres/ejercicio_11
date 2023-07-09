import React from "react";
import CardNoticia from "./cardNoticia.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function ListaNoticias({ noticias }) {
  return (
    <Row>
      {noticias.map((noticia, index) => (
        <Col key={index} sm={12} md={6} lg={4} xl={3} className="mb-4">
          <CardNoticia noticia={noticia} />
        </Col>
      ))}
    </Row>
  );
}

export default ListaNoticias;
