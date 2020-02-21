import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// Import Static Queries
import useFeaturedEvent from "../Shared/featuredEventQuery";
import useEvents from "../Shared/eventsQuery";

const News = () => {
  const featured = useFeaturedEvent().slice(0, 1);
  const events = useEvents();

  return (
    <StyledNews>
      <h1>NEWS ED EVENTI</h1>
      <section className="news-main">
        {featured.map(event => {
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
      <section className="news-secondary">
        {events.map(event => {
          const {
            title,
            image,
            start,
            slug,
            description,
          } = event.node.frontmatter;

          return (
            <article className="news-secondary__article" key={event.node.id}>
              <img
                className="news-secondary__article-image"
                src={image}
                alt={title}
              />
              <div className="news-secondary__article-info">
                <h3 className="news-secondary__article-title">{title}</h3>
                <h5 className="news-secondary__article-date">{start}</h5>
                <p className="news-secondary__article-text">{`${description.slice(
                  0,
                  80
                )} ...`}</p>
                <Link
                  className="news-secondary__article-link"
                  to={`/eventi/${slug}`}
                >
                  Scopri di più
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </StyledNews>
  );
};

export default News;

const StyledNews = styled.section`
  padding: 0 1rem;
  margin-top: 2rem;
  margin-bottom: 5rem;

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

  .news-secondary {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    .news-secondary__article {
      /* box-shadow: ${props => props.theme.bsl}; */
      .news-secondary__article-image {
        height: 200px;
        width: 100%;
      }
      .news-secondary__article-title {
        text-transform: uppercase;
        color: ${props => props.theme.primaryColor};
      }
      .news-secondary__article-date {
        text-transform: uppercase;
        font-size: 1rem;
        color: ${props => props.theme.black};
      }
      .news-secondary__article-text {
        font-size: 0.9rem;
      }

      .news-secondary__article-link {
        display: block;
        text-decoration: none;
        font-size: 0.9rem;
        color: ${props => props.theme.primaryColor};
        margin-top: 0.5rem;
      }

      /* .news-secondary__article-info {
        padding: 0 0.5rem 1.5rem 0.5rem;
      } */
    }
  }
`;
