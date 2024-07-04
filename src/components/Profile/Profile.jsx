import PropTypes from 'prop-types'
import './Profile.sass'

/**
 * Composant Profile.
 * Affiche le nom et la photo de l'hôte à partir des données fournies dans la prop `host`.
 * 
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.host - Les données de l'hôte à afficher.
 * @returns {JSX.Element} Composant React représentant le profil de l'hôte.
 */
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
