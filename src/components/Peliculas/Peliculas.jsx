import { ImageBox } from "../index";
import "./Peliculas.css";

export const Peliculas = ({ imageSrc, alt, nombre, anho }) => {
  return (
    <div className="peliculas">
      <div className="head_pelicula">
        <h3>{nombre}</h3>
        <ImageBox imageSrc={imageSrc} alt={alt} />
      </div>
      <div className="year">
        <p>
          <span>Año: </span>
          {anho}
        </p>
      </div>
    </div>
  );
};
