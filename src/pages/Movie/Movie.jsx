import { useParams } from "react-router-dom";
import { imagenesPeliculas } from "../../data/peliculas";
import { InfoPelicula } from "../../components/index";
import PropTypes from "prop-types";
import "./Movie.css";

const Movie = () => {
  const { id } = useParams();
  const movie = imagenesPeliculas.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <p>Película encontrada</p>;
  }

  return (
    <div className="container">
      <InfoPelicula
        nombre={movie.nombre}
        imageSrc={movie.image}
        sinopsis={movie.sinopsis}
      />
      <button className="btn" onClick={() => window.history.back()}>
        Volver
      </button>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    sinopsis: PropTypes.string.isRequired,
  }),
};

export default Movie;
