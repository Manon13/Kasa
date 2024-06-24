import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Rating.sass'; 

function renderStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className={i <= rating ? 'star-icon full-star' : 'star-icon empty-star'}
      />
    );
  }
  return stars;
}

function Rating(props) {
  const { rating } = props;
  return <div className="rating">{renderStars(rating)}</div>;
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
