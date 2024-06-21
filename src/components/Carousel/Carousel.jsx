import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Carousel.sass';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Calculer la numérotation actuelle (index + 1 sur le nombre total d'images)
  const currentNumber = items.length > 1 ? `${currentIndex + 1}/${items.length}` : '';

  return (
    <div className='carousel'>
      {items.length > 1 && (
        <button
          onClick={goToPrevious}
          className='carousel__button carousel__button--left'
        >
          <FontAwesomeIcon icon={faChevronLeft} className='faChevronLeft' />
        </button>
      )}
      <div className='carousel__content'>
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel__item ${
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
          className='carousel__button carousel__button--right'
        >
          <FontAwesomeIcon icon={faChevronRight} className='faChevronRight' />
        </button>
      )}
      {items.length > 1 && (
        <div className='carousel__pagination'>
          {currentNumber}
        </div>
      )}
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Carousel;
