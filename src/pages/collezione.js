import React from "react";

//Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import Collezioni from "../components/Collezioni";

const collezioniPage = () => {
  return (
    <Layout language="it">
      <SEO lang="it" title="Le Nostre Collezioni" />
      <Collezioni language="it" />
    </Layout>
  );
};

export default collezioniPage;
