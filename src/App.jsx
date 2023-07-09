import React, { useEffect, useState } from "react";
import axios from "axios";
import Formulario from "./components/formulario.jsx";
import ListaNoticias from "./components/listaNoticias.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [noticias, setNoticias] = useState([]);

  const onCategoryChange = (category) => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=60f0150a39b64c2e9feccd6427119a94`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setNoticias(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="text-center mb-4">
        <h1>Titulo</h1>
      </div>
      <div className="d-flex justify-content-center mb-4">
        <Formulario onCategoryChange={onCategoryChange} />
      </div>
      <div className="d-flex justify-content-center">
        <ListaNoticias noticias={noticias} />
      </div>
    </>
  );
}

export default App;
