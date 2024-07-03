import PropTypes from 'prop-types';
import './Banner.sass';

/**
 * Composant Banner.
 * Affiche une bannière avec une image et un texte passé en props.
 * 
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.img - L'URL de l'image de la bannière.
 * @param {string} props.text - Le texte à afficher sur la bannière.
 * @returns {JSX.Element} Composant React représentant la bannière.
 */
function Banner ({img, text}) {
    return (
        <div className='banner'>  
            <img className='banner__img' src={img} alt='Bannière'/>    
            <p className='banner__text'> {text}</p>
        </div>
    );
}

Banner.propTypes = {
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Banner;