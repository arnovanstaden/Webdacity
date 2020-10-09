import React from "react";
import { Link } from "gatsby";
import "../styles/components/header.scss"
import NavbarLogo from "../assets/images/logos/webdacity/logo-full.svg";


const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <Link to="/" className="navbar__logo">
                    <img src={NavbarLogo} alt="Webdacity Navbar Logo" />
                </Link>
                <div className="navbar__list">
                    <Link to="/about" className="navbar__list__item">
                        About
                        </Link>
                    <Link to="/services" className="navbar__list__item">
                        Services
                        </Link>
                    <Link to="/portfolio" className="navbar__list__item">
                        Portfolio
                        </Link>
                    <Link to="/contact" className="navbar__list__item">
                        Contact
                        </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
