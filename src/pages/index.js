import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { Link } from "gatsby"

const Home = () => {
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
      >

      </Section>

      <Section
        headingBig="Services"
        headingSmall="We offer a holistic approach to your digital presence."
      >

      </Section>

      <Section
        light="true"
        headingBig="Feedback"
        headingSmall="Brands who loved working with us."
      >

      </Section>

      <Section
        headingBig="Ready?"
        headingSmall={"We collaborate with ambitious brands & people. Let's build something great together."}
      >
        <button className="button">
          <Link to="/contact">Get in Touch</Link>
        </button>
      </Section>

    </Layout >
  )
}

export default Home