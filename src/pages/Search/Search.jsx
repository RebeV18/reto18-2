import { useState } from "react";
import "./Search.css";
import Movie from "../Movie/Movie";

const Search = () => {
  const [nombreB, setSearch] = useState({
    nombreBuscado: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleBuscar = (event) => {
    setSearch({
      nombreBuscado: event.target.value
    });
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nombreB);
    setSubmitted(true);
    event.target.reset();
  };

  return (
    <div className="container-search">
      <h1>Buscar película</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Digite el nombre de la película"
          className="form-control"
          type="text"
          name="nombreB"
          onChange={handleBuscar}
        />
        <button className="btn" type="submit">
          Buscar Película
        </button>
      </form>
      {submitted && <Movie movieName={nombreB.nombreBuscado} />}
    </div>
  );
}

export default Search;
