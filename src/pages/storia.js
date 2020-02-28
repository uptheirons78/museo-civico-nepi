import React from "react";
import SEO from "../components/seo";

// Components
import Layout from "../components/Layout/layout";
import Storia from "../components/Storia";

const StoriaPage = () => (
  <Layout language="it">
    <SEO
      title="Storia della nostra collezione"
      description="Il Museo Civico di Nepi, aperto al pubblico nel giugno del 1995, ha un'evoluzione che parte dagli anni '80 con l'istituzione di un deposito per i beni culturali"
      lang="it"
    />
    <Storia language="it" />
  </Layout>
);

export default StoriaPage;
