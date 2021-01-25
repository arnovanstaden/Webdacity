import React from "react";

// Gatsby, Plugins etc
import TransitionLink from "gatsby-plugin-transition-link";

// Components
import Head from "../components/Head";
import Landing from "../components/Landing";

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