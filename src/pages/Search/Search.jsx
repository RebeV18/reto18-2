import { useState } from "react";
import "./Search.css";

const Search = () => {
  const [nombreB, setSearch] = useState({
    nombreBuscado: ''
  });

  const handleBuscar = (event) => {
    setSearch({
      [event.target.value] : event.target.value
    })
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nombreB);
    //<Movie moviename={nombreB} />;
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
        <button className="btn" type="onSubmit">
          Buscar
        </button>
      </form>
    </div>
  );
}

export default Search;
