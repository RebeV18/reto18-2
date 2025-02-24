import { useState } from "react";
import "./Search.css";
import { imagenesPeliculas } from "../../data/peliculas";
import Movie from "../Movie/Movie";

const Search = () => {
  const [movieName, setSearchMovie] = useState("");

  const handleSubmit = (event) => {
    setSearchMovie(event.target.value);
    movieFound = imagenesPeliculas.find((m) => m.nombre == movieName);
    //<Movie movie={movieFound}/>
    <Link
      to={{
        pathname: `/movie/${props.movieFound.id}`,
        aboutProps: {
          movie: `${props.movieFound}`,
        },
      }}
    >
    </Link>
  };

  return (
    <div className="container-search">
      <h1>Buscar película</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Digite el nombre de la película"
          type="text"
          value={movieName}
          onChange={handleSubmit}
        />
        <button className="btn" type="submit">
          Buscar Película
        </button>
      </form>
    </div>
  );
};

export default Search;
