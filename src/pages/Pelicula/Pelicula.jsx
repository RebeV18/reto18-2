import { InfoPelicula, Header } from "../../components/index";
import { imagenesPeliculas } from "../../data/peliculas";
import PropTypes from 'prop-types';

import './Pelicula.css'

const Pelicula = ({ idP }) => {
  const pelicula = imagenesPeliculas.find(p => p.id === idP);
  return (
    <>
      <Header title={pelicula.nombre} subtitle={pelicula.anho} />
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

export default Pelicula