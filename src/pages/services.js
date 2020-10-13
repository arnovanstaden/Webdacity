import React from "react";
import { Link } from "gatsby";

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";
import ContentBlock from "../components/ContentBlock";

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
                <h1 className="landing__inner__title">
                    We merge innovative <span>solutions</span><br />
                    with impeccable <span>design</span>.
                </h1>}
            landingBig={<h1 className="landing__inner__big">What <br /> We Do</h1>}
            classNameProp="services"
        >

            <Section
                headingBig="Development"
                headingSmall="We specialise in building premium bespoke websites with light-speed performance, custom design &amp; any unique functionality needed to provide your business with an edge."
                classNameProp="services__section-development"
            >
                <div className="services__section-development__grid">

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
                light="true"
                headingBig="Tech Stack"
                headingSmall="Every project is a new story, yet some things stay the same. These are some of the tools we use during our design &amp; development process. "
                classNameProp="services__section-stack"
            >
                <div className="services__section-stack__grid">

                </div>

            </Section>

            <Section
                headingBig="Design"
                headingSmall="We're a design partner for branding and digital experiences. We design everything from corporate branding &amp; identity, custom documents, UX/UI Design for web &amp; mobile apps"
                classNameProp="services__section-design"
            >
                <div className="services__section-design__grid">
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