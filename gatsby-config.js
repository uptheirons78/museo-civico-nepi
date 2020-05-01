module.exports = {
  siteMetadata: {
    title: `Museo Civico di Nepi`,
    description: `Sito Web del Museo Civico del Comune di Nepi`,
    author: `@uptheirons78`,
    siteUrl: `https://museociviconepi.it`,
    keywords: [
      `comune di nepi`,
      `nepi`,
      `museo di nepi`,
      `museo civico di nepi`,
    ],
    contacts: {
      address: "Via Falisca n. 31",
      city: "Nepi",
      cap: "01036",
      telephone: "0761 570604",
      email: "museo@comune.nepi.vt.it",
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
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
        name: `monumenti`,
        path: `${__dirname}/content/monuments`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `monuments`,
        path: `${__dirname}/content/en-monuments`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/content/en-events`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `eventi`,
        path: `${__dirname}/content/events`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Museo Civico di Nepi`,
        short_name: `Museo Civico Nepi`,
        start_url: `/`,
        background_color: `#B20932`,
        theme_color: `#B20932`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/public/**/*.html": [
            "cache-control: public",
            "cache-control:  max-age=0",
            "cache-control: must-revalidate",
          ],
          "/public/sw.js": [
            "cache-control: public",
            "cache-control:  max-age=0",
            "cache-control: must-revalidate",
          ],
          "/public/page-data/*": [
            "cache-control: public",
            "cache-control:  max-age=0",
            "cache-control: must-revalidate",
          ],
        },
      },
    },
  ],
};
