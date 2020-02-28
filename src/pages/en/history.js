import React from "react";
import SEO from "../../components/seo";

// Components
import Layout from "../../components/Layout/layout";
import Storia from "../../components/Storia";

const HistoryPage = () => (
  <Layout language="en">
    <SEO
      title="History of our collection"
      description="The Civic Museum of Nepi, open to the public in June 1995, has evolved since the 1980s with the establishment of a deposit for cultural heritage"
      lang="en"
    />
    <Storia language="en" />
  </Layout>
);

export default HistoryPage;
