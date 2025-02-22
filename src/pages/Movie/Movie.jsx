import { InfoPelicula, Header } from "../../components/index";
import { imagenesPeliculas } from "../../data/peliculas";
import PropTypes from 'prop-types';

import './Movie.css'

const Movie = ({ movieName }) => {
  const pelicula = imagenesPeliculas.find(p => p.nombre === movieName);
  return (
    <>
      <div className="container">
        {
          <InfoPelicula
            key={pelicula.id}
            nombre={pelicula.nombre}
            imageSrc={pelicula.image}
            sinopsis={pelicula.sinopsis}
          />
        }
      </div>
    </>
  );
};

Movie.propTypes = {
  idP: PropTypes.number.isRequired,
}

export default Movie