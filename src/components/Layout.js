import React from "react";

// Gatsby, Plugins etc
import TransitionLink from "gatsby-plugin-transition-link"

// Components
import Header from "./Header";
import Footer from "./Footer";
import Head from "./Head";
import Landing from "./Landing";

// Styles & Fonts
import "typeface-nunito";
import "typeface-nunito-sans";
import "../styles/global.scss";
import "../styles/fonts/icons/icons.css";

// Icons

const Layout = (props) => {
    return (
        <>
            <Head pageMeta={props.pageMeta} />
            <Header />
            <Landing landingTitle={props.landingTitle} landingBig={props.landingBig} landingButton={props.landingButton} />
            <main className={props.classNameProp}>
                {props.children}
            </main>
            < Footer />
        </>
    )

}

export default Layout