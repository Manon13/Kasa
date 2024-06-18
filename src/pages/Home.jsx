import data from '../data/logements.json'
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import BannerImage from '../assets/Banner_home.png'

function Home() {
  return (
    <>
      <Banner img={BannerImage} text="Chez vous, partout et ailleurs" />
      <div className="card__container">
        {data.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </>
  )
}

export default Home
