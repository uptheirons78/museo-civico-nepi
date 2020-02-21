import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";

const News = () => {
  const data = useStaticQuery(graphql`
    query EventsQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "eventi" } } }
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
            }
          }
        }
      }
    }
  `);

  const featuredEvent = data.allMarkdownRemark.edges.slice(0, 1);
  const nextEvents = data.allMarkdownRemark.edges.slice(
    1,
    data.allMarkdownRemark.edges.length + 1
  );

  return (
    <StyledNews>
      <h1>NEWS ED EVENTI</h1>
      <section className="news-main">
        {featuredEvent.map(event => {
          const {
            title,
            image,
            start,
            slug,
            description,
          } = event.node.frontmatter;

          return (
            <div className="featured-event" key={event.node.id}>
              <div className="featured-event__img-container">
                <img className="featured-event__img" src={image} alt={title} />
              </div>
              <div className="featured-event__info-container">
                <Link to={`/eventi/${slug}/`}>
                  <h3 className="featured-event__info-title">{title}</h3>
                </Link>
                <h3 className="featured-event__info-date">{start}</h3>
                <p className="featured-event__info-description">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </section>
      <pre>{JSON.stringify(featuredEvent, null, 2)}</pre>
    </StyledNews>
  );
};

export default News;

const StyledNews = styled.section`
  padding: 0 1rem;
  margin-top: 2rem;
  h1 {
    color: ${props => props.theme.primaryColor};
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  .featured-event {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .featured-event__img-container {
      grid-column: 1 / 3;
      padding-right: 1rem;
      padding-top: 0.5rem;

      .featured-event__img {
        width: 100%;
      }
    }

    .featured-event__info-container {
      grid-column: 3 / 4;
      display: flex;
      flex-direction: column;

      a {
        text-decoration: none;
      }

      .featured-event__info-title {
        font-size: 2rem;
        text-transform: uppercase;
        color: ${props => props.theme.primaryColor};
        padding-right: 3rem;
      }

      .featured-event__info-date {
        font-size: 1.4rem;
        text-transform: uppercase;
        color: ${props => props.theme.black};
        margin-top: 1rem;
      }
      .featured-event__info-description {
        font-size: 1rem;
        text-align: justify;
        padding-right: 3rem;
        margin-top: 2rem;
      }
    }
  }
`;
