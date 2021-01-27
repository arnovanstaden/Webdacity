import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";
import ProjectBlock from "../components/ProjectBlock";
import ServiceTicker from "../components/ServiceTicker";

// Styles, Fonts, Images
import "../styles/pages/portfolio.scss";

// Data
import DevelopmentData from "../assets/data/projects-development.json";
import DesignData from "../assets/data/projects-design.json";


const Portfolio = ({ data }) => {
    const devProjects = DevelopmentData.filter((project) => {
        return project.visible
    });

    const desProjects = DesignData.filter((project) => {
        return project.visible
    });

    const getThumbnail = (project) => {
        const edges = data.projectThumbnails.edges;
        const folderName = project.name.replace(/ /g, "-");
        const projectType = project.type.toLowerCase();
        const item = edges.find(item => item.node.relativeDirectory.includes(`${projectType}/${folderName}`));
        if (item) {
            return item.node.childImageSharp.fluid
        }
    }

    return (
        <Layout
            pageMeta={{
                title: "Portfolio | Webdacity",
                description: "We design brand identities and develop fast & beautiful websites.",
                canonical: "/portfolio"
            }}
            landingTitle={
                <h3>
                    We <span>design</span> brand identities <br />
                    and <span>develop</span> fast &amp; beautiful websites.
                  </h3>}
            landingBig={<h1>Featured <br /> Projects</h1>}
            classNameProp="portfolio"
        >

            <Section
                headingBig="Development Projects"
                headingSmall="Our work speaks for itself. Here are some of our featured web development projects."
                classNameProp="section-projects"
            >
                <div className="section-projects__grid" id="development">
                    {devProjects.map(project => (
                        <ProjectBlock key={project.name} project={project} thumbnail={getThumbnail(project)} />
                    ))}
                </div>
            </Section>

            <Section
                light={true}
                classNameProp="about__section-services"
                container={false}
                sectionSimple={true}

            >
                <ServiceTicker />

            </Section>

            <Section
                headingBig="Design Projects"
                headingSmall="Our work speaks for itself. Here are some of our featured web design projects."
                classNameProp="section-projects"
            >
                <div className="section-projects__grid" id="design">
                    {desProjects.map(project => (
                        <ProjectBlock key={project.name} project={project} thumbnail={getThumbnail(project)} />
                    ))}
                </div>
            </Section>

        </Layout>
    )
}

export default Portfolio

export const data = graphql`
query ProjectThumbnailsQuery {
    projectThumbnails: allFile(filter: {ext: {regex: "/(jpg)/"}, absolutePath: {regex: "/images/projects/"}, name: {regex: "/landing/"}}) {
          edges {
            node {
              base
              name
              relativeDirectory
              childImageSharp {
                fluid(maxWidth: 600, quality: 90) {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                  srcWebp
                  ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
`