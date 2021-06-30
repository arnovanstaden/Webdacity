import React from "react";

// Components
import Layout from "../components/Layout";

// Styles, Fonts, Images
import "../styles/pages/index.scss";




const Home = () => {

    return (
        <Layout
            pageMeta={{
                title: "Webdacity Studio | Design & Development",
                description: "Webdacity is a Design & Development Studio based in Cape Town. We design & develop amazing websites & apps to help you grow your business.",
                canonical: "/"
            }}
            landingTitle={
                <h3>
                    <span>End</span> of an <span>Era</span>.
                </h3>}
            landingBig={<h1>Closed <br /> for Business</h1>}
            landingText="Please note Webdacity is no longer accepting any new projects. For any support on existing/past projects, please contact support."
            landingButton={{
                to: "mailto:support@webdacity.dev",
                text: "Contact Support"
            }}
            classNameProp="home"
        >


        </Layout >
    )
}

export default Home;
