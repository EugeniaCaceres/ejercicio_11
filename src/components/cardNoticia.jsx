import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";


function CardNoticia({ noticia }) {
  return (
    <Card className="h-100">
      <Card.Header>{noticia.author}</Card.Header>

      <Card.Body>
        <Card.Img variant="top" src={noticia.urlToImage} />

        <Card.Title>{noticia.title}</Card.Title>
        <Card.Text>{noticia.description}</Card.Text>
      </Card.Body>

      <Card.Footer className="text-muted">
        <Card.Link href={noticia.url} target="_blank">
          <Button>Ver noticia completa</Button>
        </Card.Link>
      </Card.Footer>
    </Card>
  );
}

export default CardNoticia;
