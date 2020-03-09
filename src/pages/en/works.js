import React from "react";

//Components
import Layout from "../../components/Layout/layout";
import SEO from "../../components/seo";
import Opere from "../../components/Opere";

const worksPage = () => {
  return (
    <Layout language="en">
      <SEO lang="en" title="Important Works" />
      <Opere language="en" />
    </Layout>
  );
};

export default worksPage;
