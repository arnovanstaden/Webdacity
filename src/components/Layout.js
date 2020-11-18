import React from "react";

// Gatsby, Plugins etc
import TransitionLink from "gatsby-plugin-transition-link";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Landing from "../components/Landing";

// Styles & Fonts
import "typeface-nunito";
import "typeface-nunito-sans";
import "../styles/global.scss";
import "../assets/fonts/icons/icons.css";

// Icons

const Layout = (props) => {
    return (
        <>
            <Head pageMeta={props.pageMeta} />
            <Landing {...props} />
            <main className={props.classNameProp}>
                {props.children}
            </main>
        </>
    )

}

export default Layout