import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Card.sass'

// Composant Card
function Card({ item }) {
  return (
    <Link to={`/logement/${item.id}`}className="card">
      <img src={item.cover} alt={item.title} />
      <h2 className="card__title ">{item.title}</h2>
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
