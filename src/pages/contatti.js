import React from "react";

//Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import Contatti from "../components/Contatti";

const contattiPage = () => {
  return (
    <Layout language="it">
      <SEO lang="it" title="Contatti" />
      <Contatti />
    </Layout>
  );
};

export default contattiPage;
