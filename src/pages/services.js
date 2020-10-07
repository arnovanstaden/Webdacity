import React from "react";
import Layout from "../components/Layout"


const Services = () => {
    return (
        <Layout
            pageMeta={{
                title: "Services | Webdacity",
                description: "Our Services",
                canonical: "/services"
            }}
            landingTitle={
                <h1 className="landing__inner__title">
                    We merge innovative <span>solutions</span><br />
                    with impeccable <span>design</span>.
                </h1>}
            landingBig={<h1 className="landing__inner__big">What <br /> We Do</h1>}
        >

        </Layout>
    )
}

export default Services