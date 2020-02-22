import React from "react";
import { Link } from "gatsby";
// Import Static Queries
import useFeaturedEvent from "../Shared/featuredEventQuery";
import useEvents from "../Shared/eventsQuery";
// Import Styled Component
import { StyledNews } from "../Styles/StyledNews";

const News = () => {
  const featured = useFeaturedEvent().slice(0, 1);
  const events = useEvents();

  return (
    <StyledNews>
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
