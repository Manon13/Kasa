import Logo_footer from "../../assets/Logo_footer.png";
import './Footer.sass';

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__img" src={Logo_footer} alt="Logo"/>
            <p className="footer__p">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;