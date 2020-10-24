import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { v4 as uuidv4 } from 'uuid';

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";
import ContentBlock from "../components/ContentBlock";

// Vendors
import FeedbackSlick from "../components/FeedbackSlick"

// Styles, Fonts, Images
import "../styles/pages/index.scss";


const Home = ({ data }) => {
  return (
    <Layout
      pageMeta={{
        title: "Webdacity Studio | Design & Development",
        description: "Webdacity is a Design & Development Studio based in Cape Town",
        canonical: "/"
      }}
      landingTitle={
        <h1 className="landing__inner__title">
          We <span>Design</span>. We <span>Develop</span>. <br />
          We <span>Dare</span> to <span>Dream</span>.
          </h1>}
      landingBig={<h1 className="landing__inner__big">Dare <br /> to Dream</h1>}
      landingButton={{
        to: "/portfolio",
        text: "View Our Work"
      }}
      classNameProp="home"
    >

      <Section
        headingBig="Projects"
        headingSmall="Our work speaks for itself. Here’s some of our featured projects."
      >

      </Section>

      <Section
        light="true"
        headingBig="Clients"
        headingSmall="We’re trusted by brands of all sizes. You’ll be in good company."
        classNameProp="home__section-clients"
      >
        <div className="home__section-clients__grid">
          {data.allFile.edges.map((image) =>
            (
              <div className="client__logo" key={uuidv4()}>
                <Img fluid={image.node.childImageSharp.fluid} />
              </div>
            ))}
        </div>

      </Section>

      <Section
        headingBig="Services"
        headingSmall="We offer a holistic approach to your digital presence."
        classNameProp="home__section-services"
      >
        <div className="home__section-services__grid">

          <ContentBlock
            heading="Development"
          >
            <p>
              We specialize in building premium bespoke websites &amp; web applications with light-speed performance, custom design &amp; any unique functionality needed to provide your business with an edge.
              </p>
            <button className="button">
              <Link to="/portfolio">
                View our Development Work
                </Link>
            </button>
          </ContentBlock>

          <ContentBlock
            heading="Design"
          >
            <p>
              We're a design partner for branding and digital experiences. We design everything from corporate branding &amp; identity, motion graphics &amp; basic video editing and custom graphic design.
              </p>
            <button className="button">
              <Link to="/portfolio">
                View our Design Work
                </Link>
            </button>
          </ContentBlock>
        </div>

        <button className="button button--centered">
          <Link to="/services">
            View All Services
                </Link>
        </button>
      </Section>

      <Section
        light="true"
        headingBig="Feedback"
        headingSmall="Brands who loved working with us."
        classNameProp="home__section-feedback"
      >
        <div className="home__section-feedback__grid">
          <FeedbackSlick />
        </div>
      </Section>

      <Section
        headingBig="Ready?"
        headingSmall={"We collaborate with ambitious brands & people. Let's build something great together."}
        classNameProp="home__section-ready"
        sectionSimple={true}
      >
        <button className="button button--centered">
          <Link to="/contact">Get in Touch</Link>
        </button>
      </Section>
    </Layout >
  )
}

export default Home;


export const query = graphql`
query ClientLogoImagesQuery {
  allFile(filter: {ext: {regex: "/(png)/"}, relativeDirectory: {eq: "logos/clients/logos"}}) {
    edges {
      node {
        base
        childImageSharp {
          fluid  {
            aspectRatio
            base64
            sizes
            src
            srcSet
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
}
`