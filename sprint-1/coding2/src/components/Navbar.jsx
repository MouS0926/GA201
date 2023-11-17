
import { Link } from 'react-router-dom'; 
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navList'>
        <li className='navItem'>
          <Link to="/">Home</Link>
        </li>
        <li className='navItem'>
          <Link to="/favourites">Favourites</Link>
        </li>
        
      </ul>
    </nav>
  );
};


export default Navbar;
