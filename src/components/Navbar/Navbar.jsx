import { useState } from "react"; 
import { Link } from "react-router-dom";
import { Menu, x } from "lucide-react" 
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav style={{ backgroundColor:'rgb(1, 56, 73)', padding: '10px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto'}}>
        <Link to="/" style={{color: 'white', fontSize: '20px', fontWeight: 'bold', textDecoration: 'none'}}>Película</Link>
        <button
          style={{background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer'}}
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <x size={24} /> : <Menu size={24} />}
        </button>
        <ul style={{
          position: 'absolute',
          top: '50px',
          left: 'o',
          width: '100%',
          backgroundColor: '0078FF',
          listStyle: 'none',
          padding: '10px',
          display: isOpen ? 'block' : 'none'
        }}>
          <li><Link to="/" style={{color: 'white', display: 'block', padding: '10px', textDecoration: 'none'}}>Inicio</Link></li>
          <li><Link to="/id" style={{color: 'white', display: 'block', padding: '10px', textDecoration: 'none'}}>Película</Link></li>
          <li><Link to="/search" style={{color: 'white', display: 'block', padding: '10px', textDecoration: 'none'}}>Buscar</Link></li>
        </ul>
      </div>
    </nav>
  );
};
