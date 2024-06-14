// import { Link } from 'react-router-dom'
import Logo from "../../assets/Logo.png";
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" />
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">Accueil</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">A propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;