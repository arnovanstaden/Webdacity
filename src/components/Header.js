import React from "react";
import { Link } from "gatsby";
import "../styles/components/header.scss"
import NavbarLogo from "../assets/images/logos/webdacity/logo-full.svg";


const Header = () => {

    const toggleNav = () => {
        let icon = document.getElementsByClassName("navbar__button__icon")[0];
        icon.classList.toggle("open");

        let body = document.getElementsByTagName('body')[0];
        body.classList.toggle("noscroll");

        let nav = document.getElementsByClassName('mobile-nav')[0];
        // initial state
        if (!nav.classList.contains("open") && !nav.classList.contains("closed")) {
            nav.classList.add("open");
        } else if (nav.classList.contains("open")) {
            nav.classList.remove("open");
            nav.classList.add("closed");
            setTimeout(() => {
                nav.classList.remove("closed");
            }, 300);
        } else {
            nav.classList.remove("closed");
            nav.classList.add("open");

        }
    }

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
                <div className="navbar__button" onClick={toggleNav} >
                    <div className="navbar__button__icon">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
            <nav className="mobile-nav">
                <div className="mobile-nav__list">
                    <Link to="/about" className="mobile-nav__list__item">
                        About
                        </Link>
                    <Link to="/services" className="mobile-nav__list__item">
                        Services
                        </Link>
                    <Link to="/portfolio" className="mobile-nav__list__item">
                        Portfolio
                        </Link>
                    <Link to="/contact" className="mobile-nav__list__item">
                        Contact
                        </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
