import { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Collapse.sass'

function Collapse({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapse__item'>
      <h2 className='collapse__title' >
        {item.title}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown}
        className='collapse__icon' onClick={toggleCollapse}/>
      </h2>
      <div className={`collapse__description ${isOpen ? 'open' : ''}`}>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

Collapse.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Collapse;


