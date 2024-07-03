import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Card.sass'

/**
 * Composant Card.
 * Affiche une carte avec une image et un titre à partir des données fournies dans la prop `item`.
 * 
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.item - Les données de l'élément à afficher dans la carte.
 * @param {string} props.item.id - L'identifiant de l'élément.
 * @param {string} props.item.cover - L'URL de l'image de couverture de l'élément.
 * @param {string} props.item.title - Le titre de l'élément.
 * @returns {JSX.Element} Composant React représentant la carte.
 */
function Card({ item }) {
  return (
    <Link to={`/logement/${item.id}`}className='card'>
      <img src={item.cover} alt={item.title} />
      <h2 className='card__title'>{item.title}</h2>
    </Link>
  )
}

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card
