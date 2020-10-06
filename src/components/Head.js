import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ pageMeta }) => {

    return (
        <Helmet>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Webdacity" />

            <title>{pageMeta.title}</title>
            <meta name="description" content={pageMeta.title} />
            <link rel="canonical" href={`https://webdacity.dev${pageMeta.canonical}`} />

        </Helmet >
    )
}

export default Head