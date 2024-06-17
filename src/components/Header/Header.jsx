import Logo from "../../assets/Logo.png";
import { Link } from 'react-router-dom'
import './Header.sass';

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">Accueil</Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;