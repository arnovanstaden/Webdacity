import { graphql } from "gatsby";
import React from "react";

// Components
import Layout from "../components/layout";
import Section from "../components/Section";

import Image from "../assets/images/projects/Oosthuizens/landing.jpg"

// Styles
import "../styles/templates/project.scss";

const PageTemplate = ({ data }) => {
    const project = data.allSitePage.edges[0].node.context;
    return (
        <Layout
            pageMeta={{
                title: "Webdacity Studio | Design & Development",
                description: "Webdacity is a Design & Development Studio based in Cape Town",
                canonical: "/"
            }}
            landingBig={<h1 className="landing__inner--big">{project.name}</h1>}
            classNameProp="project"
            projectImage={Image}
        >

            <Section
                classNameProp="section-details"
            >
                <div className="grid">
                    <div className="grid__intro">
                        <h1>{project.name}</h1>
                        <h4>{project.services}</h4>
                        <p>{project.description}</p>
                        <button className="button">
                            <a href={project.link} target="nlabk">Visit Website</a>
                        </button>
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
                            <h5>Tools</h5>
                            <p>{project.tools.replace(/,/g, "  |  ")}</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section
                light={true}
                classNameProp="section-gallery">

            </Section>

        </Layout>
    )
}

export default PageTemplate

export const query = graphql`
query($path: String) {
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
          }
        }
      }
    }
  }
  
`