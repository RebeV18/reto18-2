import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/search"}>Buscar</Link>
        </li>
      </ul>
    </nav>
  );
};
