import React from "react";

//Components
import Layout from "../../components/Layout/layout";
import SEO from "../../components/seo";
import Contatti from "../../components/Contatti";

const contactsPage = () => {
  return (
    <Layout language="en">
      <SEO lang="en" title="Contact" />
      <Contatti language="en" />
    </Layout>
  );
};

export default contactsPage;
