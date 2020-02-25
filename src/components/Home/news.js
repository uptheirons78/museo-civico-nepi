import React from "react";
import { Link } from "gatsby";
// Import Static Queries
import useFeaturedEvent from "../Shared/featuredEventQuery";
import useEnFeaturedEvent from "../Shared/enFeaturedEventQuery";
import useEvents from "../Shared/eventsQuery";
import useEnglishEvents from "../Shared/enEventsQuery";
// Import Styled Component
import { StyledNews } from "../Styles/StyledNews";

const News = ({ language }) => {
  const itEventsFeatured = useFeaturedEvent();
  const enEventsFeatured = useEnFeaturedEvent();
  const featured = language === "it" ? itEventsFeatured : enEventsFeatured;

  const itEvents = useEvents();
  const enEvents = useEnglishEvents();
  const events = language === "it" ? itEvents : enEvents;

  return (
    <StyledNews>
      <section className="news-main">
        {featured.slice(0, 1).map(event => {
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
                <Link
                  to={
                    language === "it"
                      ? `/eventi/${slug}/`
                      : `/en/events/${slug}/`
                  }
                >
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
                  to={
                    language === "it"
                      ? `/eventi/${slug}/`
                      : `/en/events/${slug}/`
                  }
                >
                  {language === "it" ? "Scopri di più" : "Read more"}
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
