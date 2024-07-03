import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Rating.sass'

/**
 * Composant Rating.
 * Affiche une série d'icônes étoiles en fonction d'un nombre de notation (`rating`) donné.
 * 
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.rating - Le nombre de notation pour afficher les étoiles.
 * @returns {JSX.Element} Composant React représentant la notation sous forme d'étoiles.
 */
const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <FontAwesomeIcon
      key={i}
      icon={faStar}
      className={i < rating ? 'star-icon full-star' : 'star-icon empty-star'}
    />
  ));

  return <div className="rating">{stars}</div>;
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;