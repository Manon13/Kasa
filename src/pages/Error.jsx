import { Link } from 'react-router-dom'
import ErrorBoundary from '../components/Error/Error'
import '../index.sass'

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
