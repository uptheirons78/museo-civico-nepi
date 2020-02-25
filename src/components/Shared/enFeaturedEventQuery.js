import { graphql, useStaticQuery } from "gatsby";

const useEnFeaturedEvent = () => {
  const data = useStaticQuery(
    graphql`
      query EN_FEATURED_EVENT_QUERY {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "events" }
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
                start(formatString: "DD MMM YYYY", locale: "en")
                end(formatString: "DD MMM YYYY", locale: "en")
              }
            }
          }
        }
      }
    `
  );
  return data.allMarkdownRemark.edges;
};

export default useEnFeaturedEvent;
