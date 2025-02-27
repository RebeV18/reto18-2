import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import { imagenesPeliculas } from "../../data/peliculas";
import { Footer } from "../../components/Footer/Footer";

const Search = () => {
  const [movieName, setMovieName] = useState("");
  const [movieFound, setMovieFound] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setMovieName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = imagenesPeliculas.find(
      (m) => m.nombre.toLowerCase() === movieName.toLowerCase()
    );
    setMovieFound(found);
    setSearchPerformed(true);
    if (found) {
      navigate(`/movie/${found.id}`, { state: { movie: found } });
    }
  };

  return (
    <div className="container-search">
      <h1>Buscar película</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Digite el nombre de la película"
          type="text"
          value={movieName}
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Buscar Película
        </button>
      </form>
      {searchPerformed && !movieFound && <p>Película no encontrada</p>}
      <Footer />
    </div>
  );
};

export default Search;
