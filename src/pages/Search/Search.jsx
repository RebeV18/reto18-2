import { useState } from 'react';

function Search() {
  const [nombre, buscarPelicula] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${nombre}`)
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
      <button className='submit' type="submit">Buscar</button>
    </form>
  )
}

export default Search