import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Slider = () => {
  const data = useStaticQuery(graphql`
    query FeaturedQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            featured: { eq: true }
            templateKey: { eq: "monumenti" }
          }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              image
            }
          }
        }
      }
    }
  `);

  const featuredMonuments = data.allMarkdownRemark.edges;

  return (
    <div>
      {featuredMonuments.map(monument => {
        return (
          <div key={monument.node.id}>
            <h4>{monument.node.frontmatter.title}</h4>
            <p>{monument.node.frontmatter.image}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
