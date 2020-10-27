import React from "react";
import { Link } from "gatsby";
import { v4 as uuidv4 } from 'uuid';

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";
import ContentBlock from "../components/ContentBlock";
import TechStack from "../components/TechStack"

// Data
import ServicesData from "../assets/data/development.json"

// Styles, Fonts, Images
import "../styles/pages/services.scss";


const Services = () => {
    return (
        <Layout
            pageMeta={{
                title: "Services | Webdacity",
                description: "Our Services",
                canonical: "/services"
            }}
            landingTitle={
                <h3>
                    We merge innovative <span>solutions</span><br />
                    with impeccable <span>design</span>.
                </h3>}
            landingBig={<h1>What <br /> We Do</h1>}
            classNameProp="services"
        >

            <Section
                headingBig="Development"
                headingSmall="We specialise in building premium bespoke websites with light-speed performance, custom design &amp; any unique functionality needed to provide your business with an edge."
                classNameProp="section-development"
            >
                <div className="section-development__grid">
                    {ServicesData.map(value => (
                        <ContentBlock
                            heading={value.name}
                            key={uuidv4()}
                        >
                            <p>{value.description}</p>
                        </ContentBlock>
                    ))}
                </div>

                <div className="view-work">
                    <h4>Like what you see but not sold just yet?</h4>
                    <button className="button">
                        <Link to="/portfolio">
                            View our Development Work
                            </Link>
                    </button>
                </div>

            </Section>

            <Section
                light={true}
                headingBig="Tech Stack"
                headingSmall="Every project is a new story, yet some things stay the same. These are some of the tools we use during our design &amp; development process. "
                classNameProp="section-stack"
            >
                <div className="section-stack__grid">
                    <TechStack />
                </div>

            </Section>

            <Section
                headingBig="Design"
                headingSmall="We're a design partner for branding and digital experiences. We design everything from corporate branding &amp; identity, custom documents, UX/UI Design for web &amp; mobile apps"
                classNameProp="section-design"
            >
                <div className="section-design__grid">
                    <ContentBlock heading="Branding">
                        <p>
                            We identify your brand by developing a logo, corporate identity, corporate documents like business cards &amp; letterheads, any mockups, and any other custom design elements. Whatever it takes to get your brand noticed.
                            </p>
                    </ContentBlock>

                    <ContentBlock heading="Design Concepts">
                        <p>
                            So, you have a new business idea or a startup with a limited budget? We’ll make a design concept for a site or web application to attract your audience and make your awesome product even more awesome.
                            </p>
                    </ContentBlock>
                </div>

                <div className="view-work">
                    <h4>Like what you see but not sold just yet?</h4>
                    <button className="button">
                        <Link to="/portfolio">
                            View our Design Work
                            </Link>
                    </button>
                </div>

            </Section>

        </Layout>
    )
}

export default Services