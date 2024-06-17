import Banner from '../components/Banner/Banner';
import Collapse from '../components/Collapse/Collapse';
import BannerImage from '../assets/Banner_about.png';

function About() {
    return (
        <>
        <Banner img={BannerImage} text=" "/>
        <Collapse />
        </>
    );

}

export default About;
