import Logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom'
import './Header.sass'

/**Composant Header qui affiche le logo et la navigation
* @returns {JSX.Element} Composant React représentant le header.
*/
function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={Logo} alt='Logo Kasa' className='header__img'/>
      </Link>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link to='/' className='nav__link'>
              Accueil
            </Link>
          </li>
          <li className='nav__item'>
            <Link to='/about' className='nav__link'>
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header