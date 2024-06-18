import { Link } from 'react-router-dom'
import './Error.sass'

function Error() {
    return (
        <div className='error'>
            <h1 className='error__title'>404</h1>
            <p className='error__p'>Oups! La page que vous demandez n&apos;existe pas.</p>
            <Link to='/' className='error__link'>Retourner sur la page d&apos;accueil</Link>
        </div>
    )
}

export default Error;