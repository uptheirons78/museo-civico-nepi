module.exports = {
  siteMetadata: {
    title: `Museo Civico di Nepi`,
    description: `Sito Web del Museo Civico del Comune di Nepi`,
    author: `@uptheirons78`,
    siteUrl: `https://www.museociviconepi.it/`,
    keywords: [
      `comune di nepi`,
      `nepi`,
      `museo di nepi`,
      `museo civico di nepi`,
    ],
    contacts: {
      address: "Via Falisca n. 26",
      city: "Nepi",
      cap: "01036",
      telephone: "0761 570604",
      email: "museo@comune.nepi.vt.it",
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `monuments`,
        path: `${__dirname}/content/monuments`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `museo-civico-nepi`,
        short_name: `museo-nepi`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
