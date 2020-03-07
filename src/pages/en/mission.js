import React from "react";

//Components
import Layout from "../../components/Layout/layout";
import SEO from "../../components/seo";
import Mission from "../../components/Mission";

const missionEnglishPage = () => {
  return (
    <Layout language="en">
      <SEO lang="en" title="Our Mission" />
      <Mission language="en" />
    </Layout>
  );
};

export default missionEnglishPage;
