import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "./Head";
import "typeface-nunito"
import "typeface-nunito-sans"
import "../styles/global.scss"
import Landing from "./Landing";


const Layout = (props) => {
    return (
        <>
            <Head pageMeta={props.pageMeta} />
            <Header />
            <Landing landingTitle={props.landingTitle} landingBig={props.landingBig} landingButton={props.landingButton} />
            { props.children}
            < Footer />
        </>
    )

}

export default Layout