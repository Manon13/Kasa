import { useParams } from 'react-router-dom'
import data from '../data/housing.json'
import Slideshow from '../components/Slideshow/Slideshow'
import Collapse from '../components/Collapse/Collapse'
import { Navigate } from 'react-router-dom'
import Tag from '../components/Tag/Tag'
import Profile from '../components/Profile/Profile'
import Rating from '../components/Rating/Rating'
import './Housing.sass'

function Housing() {
  const { id } = useParams()
  const housing = data.find((item) => item.id === id)

  if (!housing) {
    return <Navigate to="/Error" replace={true} />
  }

  const descriptionItem = {
    id: `${housing.id}-description`,
    title: 'Description',
    description: housing.description,
  }

  const equipmentsItem = {
    id: `${housing.id}-equipments`,
    title: 'Équipements',
    description: (
      <ul>
        {housing.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    ),
  }

  return (
    <section className='housing'>
      <Slideshow
        items={housing.pictures.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Logement ${housing.id} - Image ${index + 1}`}
          />
        ))}
      />
      <section className='housing__content'>
        <div className='housing__main'>
          <article className='housing__details'>
            <h1 className='housing__title'>{housing.title}</h1>
            <p className='housing__location'>{housing.location}</p>
            <div className='housing__tags'>
              {housing.tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
              ))}
            </div>
          </article>
          <aside className='housing__profile'>
            <Profile host={housing.host} />
            <Rating rating={parseInt(housing.rating, 10)} />
          </aside>
        </div>
        <div className='housing__collapses'>
          <Collapse item={descriptionItem} className='collapse__item' />
          <Collapse item={equipmentsItem} className='collapse__item' />
        </div>
      </section>
    </section>
  )
}

export default Housing