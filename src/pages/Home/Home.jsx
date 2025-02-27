import { Peliculas, Header } from "../../components/index";
import { imagenesPeliculas } from "../../data/peliculas";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <Header title="Películas" subtitle="Cartelera de Películas" />
      <div className="container">
        {imagenesPeliculas.map((pelicula) => (
          <button key={pelicula.id} onClick={() => handleClick(pelicula.id)}>
            <Peliculas
              nombre={pelicula.nombre}
              imageSrc={pelicula.image}
              anho={pelicula.anho}
            />
          </button>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
