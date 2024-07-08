import Logo_footer from '../../assets/images/Logo_footer.png'
import { Link } from 'react-router-dom'
import './Footer.sass'

/** Composant Footer qui affiche le logo et le copyrigth de Kasa.
 * @returns {JSX.Element} Composant React représentant le footer.
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <Link to="/">
        <img className="footer__img" src={Logo_footer} alt="Logo Kasa" />
      </Link>
      <p className="footer__p">© {currentYear} Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
