import React from "react";
import Layout from "../components/Layout"


const About = () => {
    return (
        <Layout
            pageMeta={{
                title: "About | Webdacity",
                description: "About Us",
                canonical: "/about"
            }} landingTitle={
                <h1 className="landing__inner__title">
                    We design and build amazing things <br />
                    that help you <span>grow</span> your business.
                  </h1>}
            landingBig={<h1 className="landing__inner__big">Who <br /> We Are</h1>}
        >
        </Layout>
    )
}

export default About