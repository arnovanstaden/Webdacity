import React from "react";
import Layout from "../components/Layout";

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
    >

    </Layout >
  )
}

export default Home