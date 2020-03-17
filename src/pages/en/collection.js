import React from "react";

//Components
import Layout from "../../components/Layout/layout";
import SEO from "../../components/seo";
import Collezioni from "../../components/Collezioni";

const collezioniEnglishPage = () => {
  return (
    <Layout language="en">
      <SEO lang="en" title="Our Collections" />
      <Collezioni language="en" />
    </Layout>
  );
};

export default collezioniEnglishPage;
