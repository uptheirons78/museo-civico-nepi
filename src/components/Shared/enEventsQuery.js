import { graphql, useStaticQuery } from "gatsby";

const useEnglishEvents = () => {
  const data = useStaticQuery(
    graphql`
      query EN_EVENTS_QUERY {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "events" }
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

export default useEnglishEvents;
