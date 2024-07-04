import data from '../data/housing.json'
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import BannerImage from '../assets/Banner_home.png'

/**
 * Composant Home.
 * Affiche la page d'accueil avec une bannière et une liste de cartes représentant les logements disponibles.
 *
 * @returns {JSX.Element} Composant React représentant la page d'accueil.
 */
function Home() {
  return (
    <>
      <Banner img={BannerImage} text='Chez vous, partout et ailleurs' />
      <section className='card__container'>
        {data.map((housing) => (
          <Card key={housing.id} item={housing} />
        ))}
      </section>
    </>
  )
}

export default Home