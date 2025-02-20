import { useState } from 'react';
import './Search.css'

function Search() {
  const [nombre, buscarPelicula] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Pelicula: ${nombre}`)
  }




  return (
    <form onSubmit={handleSubmit}>
      <label>Digite el nombre de la película  
        <input 
          type="text" 
          value={nombre}
          onChange={(p) => buscarPelicula(p.target.value)}
        />
      </label>
      <button className='submitSearch' type="onSubmit">Buscar</button>
    </form>

  )
}

export default Search