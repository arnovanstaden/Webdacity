import React from "react";
import Layout from "../components/Layout"

const Portfolio = () => {
    return (
        <Layout
            pageMeta={{
                title: "Portfolio | Webdacity",
                description: "See our Work",
                canonical: "/portfolio"
            }}
            landingTitle={
                <h1 className="landing__inner--title">
                    We <span>design</span> branding identities <br />
                    and <span>develop</span> fast &amp; beautiful websites.
                  </h1>}
            landingBig={<h1 className="landing__inner--big">Featured <br /> Projects</h1>}
        >
        </Layout>
    )
}

export default Portfolio