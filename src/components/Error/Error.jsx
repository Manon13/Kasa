import PropTypes from 'prop-types'
import './Error.sass'

/**
 * Composant ErrorBoundary qui affiche une page d'erreur avec un message personnalisé.
 * @param {Object} props Les propriétés du composant.

 * @returns {JSX.Element} Composant React représentant la page d'erreur.
 */
function ErrorBoundary({ errorCode, errorMessage }) {

  return (
    <div className="error">
      <h1 className="error__title">{errorCode}</h1>
      <p className="error__p">
        {errorMessage}
      </p>
    </div>
  )
}

ErrorBoundary.propTypes = {
  errorCode: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
}

export default ErrorBoundary