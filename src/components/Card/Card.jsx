import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Card.sass'

// Composant Card
function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`}className="card">
      <img src={logement.cover} alt={logement.title} />
      <h2 className="card__title ">{logement.title}</h2>
    </Link>
  )
}

Card.propTypes = {
  logement: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card
