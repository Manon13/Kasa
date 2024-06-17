import Logo from "../../assets/Logo.png";
import './Header.sass';

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/" className="nav__link">Accueil</a>
          </li>
          <li className="nav__item">
            <a href="/about" className="nav__link">A propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;