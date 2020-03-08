import React from "react";

//Components
import Layout from "../../components/Layout/layout";
import SEO from "../../components/seo";
import InfoAndTickets from "../../components/Info";

const infoEnglishPage = () => {
  return (
    <Layout language="en">
      <SEO lang="en" title="Informations and Tickets" />
      <InfoAndTickets language="en" />
    </Layout>
  );
};

export default infoEnglishPage;
