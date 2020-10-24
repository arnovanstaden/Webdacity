import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { v4 as uuidv4 } from 'uuid';

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";
import ContentBlock from "../components/ContentBlock";
import ServiceTicker from "../components/ServiceTicker";

// Data
import ValuesData from "../assets/data/values.json"

// Styles, Fonts, Images
import "../styles/pages/about.scss";


const About = ({ data }) => {
    return (
        <Layout
            pageMeta={{
                title: "About | Webdacity",
                description: "About Us",
                canonical: "/about"
            }} landingTitle={
                <h1 className="landing__inner--title">
                    We design and build amazing things <br />
                    that help you <span>grow</span> your business.
                  </h1>}
            landingBig={<h1 className="landing__inner--big">Who <br /> We Are</h1>}
            classNameProp="about"

        >

            <Section
                classNameProp="about__section-story"
            >
                <div className="about__section-story__grid">
                    <div className="text--left">
                        <h1>Our Story</h1>
                        <h5> Webdacity is a digital design &amp; development studio based in Cape Town, South Africa.</h5>
                    </div>
                    <div className="text--right">
                        <p>
                            We specialise in crafting rich, well-designed brand identities that connect in perfect symbiosis, from your logo to your website.
                            <br />
                            <span></span>
                            From the moment Webdacity was founded, we have helped our clients find exceptional solutions for their businesses, creating memorable brands and digital products.
                            <br />
                            <span></span>
                            Whether you're starting with a blank slate or need a complete brand overhaul, we provide a broad range of design &amp; web development services to suit your every need.
                            <br />
                            <span></span>
                            We take pride in our work and strive to deliver the very best projects for our clients.
                    </p>
                    </div>

                </div>

            </Section>

            <Section
                light={true}
                classNameProp="about__section-services"
            >
                <ServiceTicker />

            </Section>

            <Section
                headingBig="Our Values"
                headingSmall="What can we say, it’s in our DNA"
                classNameProp="about__section-values"
            >
                <div className="about__section-values__grid">
                    {ValuesData.map(value => (
                        <ContentBlock
                            heading={value.name}
                            key={uuidv4()}
                        >
                            <p>{value.description}</p>
                        </ContentBlock>
                    ))}
                </div>

            </Section>

            <Section
                light={true}
                classNameProp="about__section-stats"
            >
                <div className="about__section-stats__grid">
                    <div className="stat">
                        <h1>50+</h1>
                        <p>Happy Clients</p>
                    </div>
                    <div className="stat">
                        <h1>110+</h1>
                        <p>Completed Projects</p>
                    </div>
                    <div className="stat">
                        <h1>500 000+</h1>
                        <p>Lines of Code</p>
                    </div>
                </div>

            </Section>

            <Section
                classNameProp="about__section-founder"
            >
                <div className="about__section-founder__grid">
                    <div className="grid__image">
                        <Img fluid={data.file.childImageSharp.fluid} style={{ width: "100%" }} />
                    </div>
                    <div className="grid__text">
                        <h1>Company Founder</h1>
                        <h5>Arno van Staden</h5>
                        <p>
                            Arno started Webdacity a few years ago when he saw an intense necessity for small businesses to rejuvenate their brand and join the digital era or get left behind in the rubble of the early days of the internet.
                                <br /><br />
                                This need also later came to encompass the world of start-ups &amp; new business requiring innovative design &amp; development projects to make their brand, and their business, stand out in the crowd.
                            </p>
                    </div>
                </div>

            </Section>

        </Layout>
    )
}

export default About;

export const data = graphql`
query {
  file(relativePath: { eq: "other/arno.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 600, quality: 90) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
    }
  }
}
`