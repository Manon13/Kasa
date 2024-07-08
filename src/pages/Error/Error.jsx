import { Link } from 'react-router-dom'
import ErrorBoundary from '../../components/Error/Error'
import './Error.sass'

/**
 * Composant ErrorPage.
 * Affiche une page d'erreur avec un message d'erreur et un lien de retour vers la page d'accueil.
 * 
 * @returns {JSX.Element} Composant React représentant la page d'erreur.
 */
function ErrorPage() {

  const errorCode = '404'
  const errorMessage = 'La page que vous cherchez n\'existe pas.'

  return (
    <>
      <ErrorBoundary errorCode={errorCode} errorMessage={errorMessage}/>
      <div className='divError__link'>
        <Link to="/" className='error__link'>
          Retourner sur la page d&apos;accueil
        </Link>
      </div>
    </>
  )
}

export default ErrorPage