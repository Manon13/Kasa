import PropTypes from 'prop-types';
import './Banner.sass';

function Banner ({img, text}) {
    return (
        <div className='banner'>  
            <img className='banner__img' src={img} alt='Bannière'/>    
            <p className='banner__text'> {text}</p>
        </div>
    );
}

Banner.propTypes = {
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Banner;