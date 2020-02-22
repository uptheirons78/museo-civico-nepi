import styled from "styled-components";

export const StyledNews = styled.section`
  padding: 0 1rem;
  margin-bottom: 5rem;

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
