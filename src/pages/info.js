import React from "react";

//Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import InfoAndTickets from "../components/Info";

const infoPage = () => {
  return (
    <Layout language="it">
      <SEO lang="it" title="Informazioni e Biglietti" />
      <InfoAndTickets language="it" />
    </Layout>
  );
};

export default infoPage;
