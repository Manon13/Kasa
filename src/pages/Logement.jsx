import { useParams } from 'react-router-dom'
import data from '../data/logements.json'
import Carousel from '../components/Carousel/Carousel'
import '../components/Logement/Logement.sass'

function Logement() {
  const { id } = useParams()
  const logement = data.find((item) => item.id === id)

  if (!logement) {
    return <div>Logement introuvable.</div>
  }

  return (
    <div className="logement-container">
      <Carousel
        items={logement.pictures.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Logement ${logement.id} - Image ${index + 1}`}
          />
        ))}
      />
      <h1>{logement.title}</h1>
    </div>
  )
}

export default Logement
