import React from "react"
import { Link } from "gatsby";
import "../styles/components/footer.scss";

// Images
import FooterLogo from "../assets/images/logos/webdacity/logo-full.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <img src={FooterLogo} alt="Webdacity Footer Logo" />
                <div className="footer__menu">
                    <Link to="/about" className="footer__menu__item">
                        About
                        </Link>
                    <Link to="/services" className="footer__menu__item">
                        Services
                        </Link>
                    <Link to="/portfolio" className="footer__menu__item">
                        Portfolio
                        </Link>
                    <Link to="/contact" className="footer__menu__item">
                        Contact
                        </Link>
                </div>
                <div className="footer__divider"></div>
                <div className="footer__contact">
                    <p>Got an awesome project in mind? <Link to="/contact">Let's talk!</Link> </p>
                    <div className="footer__contact__details">
                        <a href="mailto:hello@webdacity.co.za">hello@webdacity.co.za</a>
                        <span>|</span>
                        <a href="tel:0797405874">079 740 5874</a>
                    </div>
                </div>
                <div className="footer__social">
                    <a href="https://www.instagram.com/?hl=en" target="blank">
                        <i className="icon-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/webdacity" target="blank">
                        <i className="icon-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/Webdacity" target="blank">
                        <i className="icon-facebook"></i>
                    </a>
                </div>
            </div>
            <p className="footer__copy">© 2020 - Webdacity (PTY) LTD.</p>
        </footer>
    )
}

export default Footer