const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  // Templates
  const monumentTemplate = path.resolve(`./src/templates/monument.js`);
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
  // Check for errors
  if (monumentsResult.errors) {
    reporter.panic("Failed to create posts", monumentsResult.errors);
  }
  // Arrays
  const monuments = monumentsResult.data.allMarkdownRemark.edges;

  // Create Pages
  monuments.forEach(post => {
    createPage({
      path: `/monumenti/${post.node.frontmatter.slug}`,
      component: monumentTemplate,
      context: {
        slug: post.node.frontmatter.slug,
      },
    });
  });
};
