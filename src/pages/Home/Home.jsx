import { Peliculas, Header } from "../../components/index";
import { imagenesPeliculas } from "../../data/peliculas";
import { useState } from "react";

import "./Home.css";

const Home = () => {
  const [id, mostrar] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    alert(`Pelicula: ${event.key}`);
    //<Pelicula idP={pelicula.id} />
  };

  return (
    <>
      <Header title="Películas" subtitle="Cartelera de Películas" />
      <div className="container">
        {imagenesPeliculas.map((pelicula) => (
          <button onClick={handleClick}>
            <Peliculas
              key={pelicula.id}
              nombre={pelicula.nombre}
              imageSrc={pelicula.image}
              anho={pelicula.anho}
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default Home;
