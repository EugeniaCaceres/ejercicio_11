import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Formulario({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("business");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCategoryChange(selectedCategory);
  };

  return (
<Form onSubmit={handleSubmit} className="d-flex align-items-center">
  <Form.Group controlId="categorySelector" className="mr-2 mb-0 d-flex align-items-center">
    <Form.Label className="mr-2 mb-0">Categoría:</Form.Label>
    <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange}>
      <option value="business">Negocios</option>
      <option value="entertainment">Entretenimiento</option>
      <option value="general">General</option>
      <option value="health">Salud</option>
      <option value="science">Ciencia</option>
      <option value="sports">Deportes</option>
      <option value="technology">Tecnología</option>
    </Form.Control>
  </Form.Group>
  <Button variant="primary" type="submit">
    Consultar
  </Button>
</Form>

  
  );
}

export default Formulario;
