import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" id="navbar">
      <div className="container-fluid">
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" style={{color: 'white', fontSize: '20px', fontWeight: 'bold', textDecoration: 'none'}}>Inicio</Link>
            </li>
            <li class="nav-item">
            <Link to="/search" style={{color: 'white', fontSize: '20px', fontWeight: 'bold', textDecoration: 'none'}}>Buscar</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
