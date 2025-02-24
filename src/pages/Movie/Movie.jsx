import { InfoPelicula } from "../../components/index";
import PropTypes from 'prop-types';

import './Movie.css'

const Movie = ({ movie }) => {
  return (
    <>
      <div className="container">
        {
          <InfoPelicula
            key={movie.id}
            nombre={movie.nombre}
            imageSrc={movie.image}
            sinopsis={movie.sinopsis}
          />
        }
      </div>
    </>
  );
};

Movie.propTypes = {
  movieName: PropTypes.object.isRequired,
}

export default Movie