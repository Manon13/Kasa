import Logo_footer from '../../assets/Logo_footer.png';
import './Footer.sass';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <img className='footer__img' src={Logo_footer} alt='Logo Kasa'/>
            <p className='footer__p'>© {currentYear} Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;