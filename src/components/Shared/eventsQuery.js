import { graphql, useStaticQuery } from "gatsby";

const useEvents = () => {
  const data = useStaticQuery(
    graphql`
      query EVENTS_QUERY {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "eventi" }
              featured: { eq: false }
            }
          }
          sort: { fields: frontmatter___start, order: DESC }
        ) {
          edges {
            node {
              id
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

export default useEvents;
