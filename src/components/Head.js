import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ pageMeta }) => {
    let currentYear = new Date();
    currentYear = currentYear.getFullYear();

    return (
        <Helmet htmlAttributes={{ "lang": "en" }}>

            <title>{pageMeta.title}</title>
            <meta name="description" content={pageMeta.description} />
            <link rel="canonical" href={`https://webdacity.dev${pageMeta.canonical}`} />
            <meta name="robots" content={pageMeta.robots ? pageMeta.robots : "index, follow"} />

            <meta name="author" content="Webdacity" />
            <meta name="copyright" content={`Webdacity © ${currentYear}`} />
            <meta name="theme-color" content="#151618" />

            {/* Open Graph */}
            <meta property="og:site_name" content="Webdacity" />
            <meta property="og:title" content={pageMeta.title} />
            <meta property="og:description" content={pageMeta.description} />
            <meta property="og:type" content="Website" />
            <meta property="og:url" content={`https://webdacity.dev${pageMeta.canonical}`} />
            <meta property="og:image" content="https://webdacity.dev/social.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="500" />
            <meta property="og:image:height" content="500" />
            <meta property="og:image:alt" content="Webdacity Logo" />

            {/* Stylesheets */}
            <script src="/pace.min.js"></script>

        </Helmet >
    )
}

export default Head