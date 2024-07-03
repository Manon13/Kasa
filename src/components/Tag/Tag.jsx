import PropTypes from 'prop-types'
import './Tag.sass'

/**
 * Composant Tag.
 * Affiche un tag avec un texte spécifié.
 * 
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.tag - Le texte du tag à afficher.
 * @returns {JSX.Element} Composant React représentant un tag.
 */
function Tag({ tag }) {
    return (
        <span className='tag'>{tag}</span>
    )
}

Tag.propTypes = {
    tag: PropTypes.string.isRequired,
}

export default Tag