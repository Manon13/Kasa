import { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, } from '@fortawesome/free-solid-svg-icons'
import './Slideshow.sass'

/**
 * Composant Slideshow.
 * Affiche un carrousel d'images avec des boutons de navigation gauche et droite.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Array<JSX.Element>} props.items - Les éléments à afficher dans le carrousel.
 * @returns {JSX.Element} Composant React représentant le carrousel.
 */
const Slideshow = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    )
  }

/* Calcul de la numérotation actuelle (index + 1 sur le nombre total d'images). */
  const currentNumber =
    items.length > 1 ? `${currentIndex + 1}/${items.length}` : ''

  return (
    <div className="slideshow">
      {items.length > 1 && (
        <button
          onClick={goToPrevious}
          className="slideshow__button slideshow__button--left"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="faChevronLeft" />
        </button>
      )}
      <div className="slideshow__content">
        {items.map((item, index) => (
          <div
            key={index}
            className={`slideshow__item ${
              index === currentIndex ? 'active' : ''
            }`}
          >
            {index === currentIndex && item}
          </div>
        ))}
      </div>
      {items.length > 1 && (
        <button
          onClick={goToNext}
          className="slideshow__button slideshow__button--right"
        >
          <FontAwesomeIcon icon={faChevronRight} className="faChevronRight" />
        </button>
      )}
      {items.length > 1 && (
        <div className="slideshow__pagination">{currentNumber}</div>
      )}
    </div>
  )
}

Slideshow.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default Slideshow
