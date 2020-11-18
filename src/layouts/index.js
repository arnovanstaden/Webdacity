import React from "react";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Styles & Fonts
import "typeface-nunito";
import "typeface-nunito-sans";
import "../styles/global.scss";
import "../assets/fonts/icons/icons.css";

// Icons

const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )

}

export default Layout