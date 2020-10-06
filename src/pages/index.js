import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head"

const Home = () => {
  return (
    <Layout pageMeta={{
      title: "Webdacity Studio | Design & Development",
      description: "Webdacity is a Design & Development Studio based in Cape Town",
      canonical: "/"
    }}>
      <h1>Ola</h1>
    </Layout>
  )
}

export default Home
