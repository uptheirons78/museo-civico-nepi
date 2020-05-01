import { graphql, useStaticQuery } from "gatsby";

const useMonumenti = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            featured: { eq: true }
            templateKey: { eq: "monumenti" }
          }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              description
              image
            }
          }
        }
      }
    }
  `);
  return data.allMarkdownRemark.edges;
};

export default useMonumenti;
