const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  // Templates
  const monumentTemplate = path.resolve(`./src/templates/monument.js`);
  const enMonumentTemplate = path.resolve(`./src/templates/enMonument.js`);
  const eventTemplate = path.resolve(`./src/templates/event.js`);

  // Results
  const monumentsResult = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "monumenti" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  const enMonumentsResult = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "monuments" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  const eventsResult = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "eventi" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  // Check for errors
  if (monumentsResult.errors) {
    reporter.panic("Failed to create monuments posts", monumentsResult.errors);
  }

  if (enMonumentsResult.errors) {
    reporter.panic(
      "Failed to create english monuments posts",
      monumentsResult.errors
    );
  }

  if (eventsResult.errors) {
    reporter.panic("Failed to create events posts", eventsResult.errors);
  }
  // Arrays
  const monuments = monumentsResult.data.allMarkdownRemark.edges;
  const enMonuments = enMonumentsResult.data.allMarkdownRemark.edges;
  const events = eventsResult.data.allMarkdownRemark.edges;

  // Create Pages
  // Monuments pages
  monuments.forEach(post => {
    createPage({
      path: `/monumenti/${post.node.frontmatter.slug}`,
      component: monumentTemplate,
      context: {
        slug: post.node.frontmatter.slug,
      },
    });
  });

  // English Versione Monuments pages
  enMonuments.forEach(post => {
    createPage({
      path: `/en/monuments/${post.node.frontmatter.slug}`,
      component: enMonumentTemplate,
      context: {
        slug: post.node.frontmatter.slug,
      },
    });
  });

  // Events pages
  events.forEach(post => {
    createPage({
      path: `/eventi/${post.node.frontmatter.slug}`,
      component: eventTemplate,
      context: {
        slug: post.node.frontmatter.slug,
      },
    });
  });
};
