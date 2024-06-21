import PropTypes from 'prop-types'
import './Profile.sass'

function Profile({ host }) {
  const [firstName, lastName] = host.name.split(' ');

  return (
    <div className="profile">
      <p className="profile__name">
        {firstName}<br />{lastName}
      </p>
      <img src={host.picture} alt={host.name} className="profile__picture" />
    </div>
  )
}

Profile.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
}

export default Profile
