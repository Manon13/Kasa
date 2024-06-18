import data from '../data/about.json'
import Banner from '../components/Banner/Banner'
import Collapse from '../components/Collapse/Collapse'
import BannerImage from '../assets/Banner_about.png'
import '../components/Collapse/Collapse.sass'

function About() {
  return (
    <>
      <Banner img={BannerImage} text=' ' />
      <div className='collapse'>
        {data.map((item) => (
          <Collapse key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}

export default About
