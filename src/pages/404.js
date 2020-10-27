import React from "react";
import Layout from "../components/Layout";


const NotFound = () => {
    return (
        <Layout
            pageMeta={{
                title: "Page not Found | Webdacity",
                description: "Page not Found",
                robots: "noindex, nofollow"
            }}
            landingTitle={
                <h3>
                    Sorry, but the <span>page</span> you're<br />
                     looking for <span>doesn't exist</span>.
                </h3>}
            landingBig={<h1>Four <br /> Oh Four</h1>}
            classNameProp="services"
        >

            <h1>Page not Found</h1>
        </Layout>
    )
}

export default NotFound
