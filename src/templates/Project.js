import { graphql, Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";

// Styles
import "../styles/templates/project.scss";
import LogoMark from "../assets/images/icons/content-block.svg";


const PageTemplate = ({ pageContext, data }) => {

    const project = pageContext.project;

    const getImage = (name, alias) => {
        let edges = data[alias].edges;
        const item = edges.find(item => item.node.name === name);
        if (item) {
            return item.node.childImageSharp.fluid
        }
    }

    // Components

    const WebsiteLink = () => {
        return (
            <button className="button">
                <a href={project.link} target="blank">Visit Website</a>
            </button>
        )
    }

    const DesignLink = () => {
        const link = "/portfolio/design/" + project.name.replace(/ /g, "");
        return (
            <button className="button">
                <Link to={link}>View Design Work</Link>
            </button>
        )
    }

    const DevelopmentLink = () => {
        const link = "/portfolio/development/" + project.name.replace(/ /g, "");
        return (
            <button className="button">
                <Link to={link}>View Development Work</Link>
            </button>
        )
    }

    // Project Images
    const ProjectImages = () => {
        let edges = data.projectImages.edges;
        let projectImages = [];

        projectImages.push(<Img fluid={getImage(`landing`, "projectImages")} key="landing" style={{ width: "100%", marginBottom: "2rem" }} />)

        for (let i = 1; i <= (edges.length - 1); i++) {
            projectImages.push(<Img fluid={getImage(`${i}`, "projectImages")} key={i} style={{ width: "100%", marginBottom: "2rem" }} />)
        }
        return projectImages
    }

    return (
        <Layout
            pageMeta={{
                title: "Webdacity Studio | Design & Development",
                description: "Webdacity is a Design & Development Studio based in Cape Town.",
                canonical: "/"
            }}
            project={project}
            classNameProp="project"
        >

            <Section
                classNameProp="section-details"
                skew={false}
            >
                <div className="grid">
                    <div className="grid__intro">
                        <div className="grid__intro__name">
                            <img src={LogoMark} alt="" />
                            <h1>{project.name}</h1>
                        </div>
                        <h4>{project.services}</h4>
                        <p>{project.description}</p>
                        <div className="grid__intro__links">
                            {project.type === "Development" ? <WebsiteLink /> : null}
                            {project.design ? <DesignLink /> : null}
                            {project.development ? <DevelopmentLink /> : null}
                        </div>
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
                classNameProp="section-gallery"
                skew={false}

            >
                <ProjectImages />

            </Section>

        </Layout>
    )
}

export default PageTemplate

export const query = graphql`
query projectImages($imgPath: String) {
      projectImages: allFile(filter: {ext: {regex: "/(jpg)/"},relativeDirectory: {eq: $imgPath}}) {
        edges {
          node {
            base
            name
            childImageSharp {
              fluid(maxWidth: 1920, quality: 85) {
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

