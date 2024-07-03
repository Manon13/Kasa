import { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Collapse.sass'


/**
 * Composant Collapse qui affiche un élément avec un titre et une description.
 * Utilise un état local pour gérer l'ouverture et la fermeture de la description.
 * 
 * @component
 * @param {Object} props - Les props du composant.
 * @param {Object} props.item - Les données de l'élément à afficher.
 * @param {string} props.item.id - L'identifiant de l'élément.
 * @param {string} props.item.title - Le titre de l'élément.
 * @param {string} props.item.description - La description de l'élément.
 * @returns {JSX.Element} Un élément JSX représentant l'élément avec un titre et une description.
 */
function Collapse({ item }) {
  const [isOpen, setIsOpen] = useState(false)

  /* Fonction pour basculer l'état d'ouverture/fermeture de la description. */
  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse__item">
      <h2 className="collapse__title">
        {item.title}
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="collapse__icon"
          onClick={toggleCollapse}
        />
      </h2>
      <div className={`collapse__description ${isOpen ? 'open' : ''}`}>
        {item.description}
      </div>
    </div>
  )
}

Collapse.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
      .isRequired,
  }).isRequired,
}

export default Collapse