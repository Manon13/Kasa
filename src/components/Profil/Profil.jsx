import PropTypes from 'prop-types';
import './Profil.sass';

function Profil({ host }) {
  return (
    <div className="profile">
      <img src={host.picture} alt={host.name} className="profile__picture" />
      <p className="profile__name">{host.name}</p>
    </div>
  );
}

Profil.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profil;
