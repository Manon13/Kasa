import { Link } from 'react-router-dom'
import ErrorBoundary from '../components/Error/Error'
import '../index.sass'

/**
 * Composant ErrorPage.
 * Affiche une page d'erreur avec un message d'erreur et un lien de retour vers la page d'accueil.
 *
 * @component
 * @returns {JSX.Element} Composant React représentant la page d'erreur.
 */
function ErrorPage() {
  return (
    <>
      <ErrorBoundary />
      <div className='divError__link'>
        <Link to="/" className="error__link">
          Retourner sur la page d&apos;accueil
        </Link>
      </div>
    </>
  )
}

export default ErrorPage
