import { Pelicula } from '../index'

export const Buscar = () => {
    return (
        <form id="busqueda">
            <input className="input" type="text" id="peliculaBuscada" placeholder="Escribe nombre de la película" />
            <button className="btn" id="submit">Buscar</button>
        </form>
    )
}

document.addEventListener('DOMContentLoaded', () => {
  const film = document.getElementById('peliculaBuscada');

  const buscarPelicula = (evento) => {
    evento.preventDefault();
    const nombrePelicula = film.value.trim();
    if (nombrePelicula === '') {
      alert("Por favor, ingrese un nombre válido");
      return;
    }
    else{
      const peliculaEncontrada = imagenesPeliculas.find((p) => p.nombre == nombrePelicula);
      Pelicula(peliculaEncontrada.id);
    }
  }

  contact.addEventListener('submit', buscarPelicula);
});

export default Buscar