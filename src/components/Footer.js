import React from "react"
import { Link } from "gatsby";
import "../styles/footer.scss";

// Images
import FooterLogo from "../assets/images/logos/webdacity/logo-full.svg";
import InstagramLogo from "../assets/images/icons/instagram-blue.png"
import FacebookLogo from "../assets/images/icons/facebook-blue.png"
import LinkedInLogo from "../assets/images/icons/linkedin-blue.png"

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
                    <a href="https://www.instagram.com/?hl=en">
                        <img src={InstagramLogo} alt="" target="blank" />
                    </a>
                    <a href="https://www.facebook.com/Webdacity">
                        <img src={FacebookLogo} alt="" target="blank" />
                    </a>
                    <a href="https://www.linkedin.com/company/webdacity" target="blank">
                        <img src={LinkedInLogo} alt="" />
                    </a>
                </div>
            </div>
            <p className="footer__copy">© 2020 - Webdacity (PTY) LTD.</p>
        </footer>
    )
}

export default Footer