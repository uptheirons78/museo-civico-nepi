import React from "react";

//Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import Mission from "../components/Mission";

const missionPage = () => {
  return (
    <Layout language="it">
      <SEO lang="it" title="La Nostra Mission" />
      <Mission language="it" />
    </Layout>
  );
};

export default missionPage;
