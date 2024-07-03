import data from '../data/logements.json'
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import BannerImage from '../assets/Banner_home.png'

/**
 * Composant Home.
 * Affiche la page d'accueil avec une bannière et une liste de cartes représentant les logements disponibles.
 *
 * @component
 * @returns {JSX.Element} Composant React représentant la page d'accueil.
 */
function Home() {
  return (
    <>
      <Banner img={BannerImage} text='Chez vous, partout et ailleurs' />
      <div className='card__container'>
        {data.map((logement) => (
          <Card key={logement.id} item={logement} />
        ))}
      </div>
    </>
  )
}

export default Home
