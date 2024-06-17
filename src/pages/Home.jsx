import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';
import BannerImage from '../assets/Banner_home.png';

function Home() {
    return (
        <>
        <Banner img={BannerImage} text="Chez vous, partout et ailleurs"/>
        <Card />
        </>
    );
}

export default Home;