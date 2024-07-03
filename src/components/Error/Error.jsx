import './Error.sass'

/* Composant ErrorBoundary qui affiche une page d'erreur 404. */
function ErrorBoundary() {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <p className="error__p">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
    </div>
  )
}

export default ErrorBoundary