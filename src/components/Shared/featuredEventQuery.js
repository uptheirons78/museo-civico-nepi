import { graphql, useStaticQuery } from "gatsby";

const useFeaturedEvent = () => {
  const data = useStaticQuery(
    graphql`
      query FEATURED_EVENT_QUERY {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "eventi" }
              featured: { eq: true }
            }
          }
          sort: { fields: frontmatter___start, order: ASC }
        ) {
          edges {
            node {
              frontmatter {
                slug
                title
                description
                image
                start(formatString: "DD MMM YYYY", locale: "it")
                end(formatString: "DD MMM YYYY", locale: "it")
              }
            }
          }
        }
      }
    `
  );
  return data.allMarkdownRemark.edges;
};

export default useFeaturedEvent;
