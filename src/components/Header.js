import React, { useEffect } from "react";
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
            // nav.classList.remove("open");
            nav.classList.add("closed");
            setTimeout(() => {
                nav.classList.remove("open");
                nav.classList.remove("closed");
            }, 1300);
        } else {
            nav.classList.remove("closed");
            nav.classList.add("open");
        }
    }

    const closeNav = () => {

        let body = document.getElementsByTagName('body')[0];
        body.classList.remove("noscroll");

        let nav = document.getElementsByClassName('mobile-nav')[0];
        nav.classList.remove("closed");
        nav.classList.remove("open");
    }


    return (
        <header>
            <nav className="navbar">
                <Link to="/" className="navbar__logo" onClick={closeNav}>
                    <img src={NavbarLogo} />
                </Link>
            </nav>
        </header>
    )
}

export default Header
