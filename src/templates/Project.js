import { graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";


// Styles
import "../styles/templates/project.scss";

const PageTemplate = ({ data }) => {
    const project = data.allSitePage.edges[0].node.context;

    const WebsiteLink = () => {
        return (
            <button className="button">
                <a href={project.link} target="blank">Visit Website</a>
            </button>
        )
    }

    return (
        <Layout
            pageMeta={{
                title: "Webdacity Studio | Design & Development",
                description: "Webdacity is a Design & Development Studio based in Cape Town",
                canonical: "/"
            }}
            landingBig={<h1 className="landing__inner--big">{project.name}</h1>}
            classNameProp="project"
            projectImage={data.landingImage}
        >

            <Section
                classNameProp="section-details"
            >
                <div className="grid">
                    <div className="grid__intro">
                        <h1>{project.name}</h1>
                        <h4>{project.services}</h4>
                        <p>{project.description}</p>
                        {project.type === "Development" ? <WebsiteLink /> : null}
                    </div>
                    <div className="grid__details">
                        <div className="grid__details__row">
                            <h5>Project Date</h5>
                            <p>{project.date}</p>
                        </div>
                        <div className="grid__details__row">
                            <h5>Industry</h5>
                            <p>{project.industry}</p>
                        </div>
                        <div className="grid__details__row row--tools">

                            {project.type === "Development" ? <h5>Tools</h5> : <h5>Design Elements</h5>}
                            {project.type === "Development" ? <p>{project.tools.replace(/,/g, "  |  ")}</p> : <p>{project.elements.replace(/,/g, "  |  ")}</p>}

                        </div>
                    </div>
                </div>
            </Section>

            <Section
                light={true}
                classNameProp="section-gallery">
                <Img fluid={data.landingImage.childImageSharp.fluid} />
            </Section>

        </Layout>
    )
}

export default PageTemplate

export const query = graphql`
query ($path: String) {
    allSitePage(filter: {path: {eq: $path}}) {
      edges {
        node {
          context {
            type
            tools
            services
            name
            link
            date
            industry
            description
            elements
            imagePath
          }
        }
      }
    }
  }
`
