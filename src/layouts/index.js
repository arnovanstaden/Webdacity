import React from "react";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Transition from '../components/Transition'
import Vanta from "../components/Vanta"


// Styles & Fonts
import "typeface-nunito";
import "typeface-nunito-sans";
import "../styles/global.scss";
import "../assets/fonts/icons/icons.css";

// Icons

const Layout = ({ children, location }) => {
    return (
        <>
            <Header />
            <Transition location={location}>
                <Vanta />
                {children}
            </Transition>
            <Footer />
        </>
    )

}

export default Layout