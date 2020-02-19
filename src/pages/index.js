import React from "react";
import SEO from "../components/seo";

// Components
import Layout from "../components/Layout/layout";
import Home from "../components/Home";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
);

export default IndexPage;
