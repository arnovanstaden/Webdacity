import React from "react"
import { Link } from "gatsby";
import "../styles/components/footer.scss";

// Images
import FooterLogo from "../assets/images/logos/webdacity/logo-full.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer__contact">
                    <p>Need supporting on a past project with Webdacity? Send us an email and we'll get back to you soon.</p>
                    <div className="footer__contact__details">
                        <a href="mailto:support@webdacity.dev">support@webdacity.dev</a>
                    </div>
                </div>
            </div>
            <div className="footer__copy">
                <p><Link to="/terms">Terms of Service</Link></p>
                <span>|</span>
                <p> © 2021 - Webdacity (PTY) LTD.</p>
            </div>
        </footer>
    )
}

export default Footer