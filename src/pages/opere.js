import React from "react";

//Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import Opere from "../components/Opere";

const operePage = () => {
  return (
    <Layout language="it">
      <SEO lang="it" title="Opere Importanti" />
      <Opere language="it" />
    </Layout>
  );
};

export default operePage;
