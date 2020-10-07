import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
    return (
        <Layout
            pageMeta={{
                title: "Contact | Webdacity",
                description: "Contact Us",
                canonical: "/contact"
            }}
            landingTitle={
                <h1 className="landing__inner__title">
                    We’re always interested in hearing <br />
                    about <span>new projects</span>.
            </h1>}
            landingBig={<h1 className="landing__inner__big">Let's Work <br /> Together</h1>}
        >

            <h1>Ola</h1>
        </Layout >
    )
}

export default Contact