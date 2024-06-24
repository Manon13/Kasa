// import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Error.sass';

function ErrorBoundary() {

    return (
        <div className='error'>
            <h1 className='error__title'>404</h1>
            <p className='error__p'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className='error__link'>Retourner sur la page d'accueil</Link>
        </div>
    );
    
    // const error = useRouteError();

    // let errorMessage = 'Oups! Une erreur est survenue.';
    // let errorStatus = error?.status || '';

    // if (errorStatus === 404) {
    //     errorMessage = 'Oups! La page que vous demandez n\'existe pas.';
    // } else if (errorStatus === 401) {
    //     errorMessage = 'Oups! Vous n\'êtes pas autorisé à accéder à cette page.';
    // } else if (errorStatus === 500) {
    //     errorMessage = 'Oups! Une erreur est survenue sur le serveur.';
    // }

    // console.error(error);
    // console.log(errorStatus);

    // return (
    //     <div className='error'>
    //         <h1 className='error__title'>{errorStatus.toString() || 'Error'}</h1>
    //         <p className='error__p'>{errorMessage}</p>
    //         <Link to='/' className='error__link'>Retourner sur la page daccueil</Link>
    //     </div>
    // );
}

export default ErrorBoundary;
