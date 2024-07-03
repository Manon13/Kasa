import { useParams } from 'react-router-dom'
import data from '../data/logements.json'
import Carousel from '../components/Carousel/Carousel'
import Collapse from '../components/Collapse/Collapse'
import { Navigate } from 'react-router-dom'
import Tag from '../components/Tag/Tag'
import Profile from '../components/Profile/Profile'
import Rating from '../components/Rating/Rating'
import '../index.sass'

/**
 * Composant Logement.
 * Affiche les détails d'un logement spécifique à partir des données fournies.
 *
 * @component
 * @returns {JSX.Element} Composant React représentant les détails du logement.
 */
function Logement() {
  const { id } = useParams()
  const logement = data.find((item) => item.id === id)

  /* Redirige vers la page d'erreur si le logement n'est pas trouvé. */
  if (!logement) {
    return <Navigate to="/Error" replace={true} />;
  }

  /* Définition des items de description et d'équipements pour le Collapse. */
  const descriptionItem = {
    id: `${logement.id}-description`,
    title: 'Description',
    description: logement.description,
  }

  const equipmentsItem = {
    id: `${logement.id}-equipments`,
    title: 'Équipements',
    description: (
      <ul>
        {logement.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    ),
  }

  return (
    <div className='logement-container'>
      <Carousel
        items={logement.pictures.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Logement ${logement.id} - Image ${index + 1}`}
          />
        ))}
      />
      <div className='logement'>
        <div className='logement__divPrincipale'>
          <div>
            <h1 className='logement__title'>{logement.title}</h1>
            <p className='logement__location'>{logement.location}</p>
            <div className='tags-container'>
              {logement.tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
              ))}
            </div>
          </div>
          <div className='div-profile'>
            <Profile host={logement.host} />
            <Rating rating={parseInt(logement.rating, 10)} />
          </div>
        </div>
        <div className='divCollapse'>
          <div className='divItemCollapse'>
            <Collapse item={descriptionItem} className='divCollapse__item' />
          </div>
          <div className='divItemCollapse'>
            <Collapse item={equipmentsItem} className='divCollapse__item' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logement
