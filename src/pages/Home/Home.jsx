import { Peliculas, Header } from "../../components/index";
import { imagenesPeliculas } from "../../data/peliculas";

import './Home.css'

const Home = () => {
  return (
    <>
      <Header title="Películas" subtitle="Cartelera de Películas" />
      <div className="container">
        {imagenesPeliculas.map((pelicula) => (
          <Peliculas
            key={pelicula.id}
            nombre={pelicula.nombre}
            imageSrc={pelicula.image}
            anho={pelicula.anho}
          />
        ))}
      </div>
    </>
  );
};

export default Home