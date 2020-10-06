import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "./Head";
import "../styles/index.scss"


const Layout = ({ pageMeta, children }) => {
    return (
        <>
            <Head pageMeta={pageMeta} />
            <Header />
            {children}
            <Footer />
        </>
    )

}

export default Layout