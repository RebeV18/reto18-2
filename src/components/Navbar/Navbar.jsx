import { Link } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="nav-container">
      <Link to="/">Inicio</Link>
      <Link to="/search">Buscar</Link>
    </nav>
  );
};
