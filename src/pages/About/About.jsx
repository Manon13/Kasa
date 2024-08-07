import data from '../../assets/data/about.json'
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import BannerImage from '../../assets/images/Banner_about.png'
import './About.sass'

/** Composant About.
 * Affiche la page "À propos" avec une bannière et une liste de collapsibles.
 * 
 * @returns {JSX.Element} Composant React représentant la page "À propos".
 */
function About() {
  return (
    <>
      <Banner img={BannerImage} text=' ' />
      <section className='collapse'>
        {data.map((item) => (
          <Collapse key={item.id} item={item}/>
        ))}
      </section>
    </>
  )
}

export default About