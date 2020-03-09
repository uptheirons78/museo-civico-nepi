import styled from "styled-components";

export const StyledNews = styled.section`
  padding: 0 1rem;
  margin-bottom: 5rem;

  .featured-event {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }

    .featured-event__img-container {
      grid-column: span 2;
      padding-right: 1rem;
      padding-top: 0.5rem;

      @media screen and (max-width: 600px) {
        grid-column: span 1;
        padding-right: 0;
      }

      .featured-event__img {
        width: 100%;

        @media screen and (max-width: 600px) {
          height: 240px;
        }
      }
    }

    .featured-event__info-container {
      grid-column: span 1;
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

        @media screen and (max-width: 880px) {
          font-size: 1.6rem;
          padding-right: 0;
        }
        @media screen and (max-width: 600px) {
          font-size: 1.4rem;
          padding-right: 0;
        }
      }

      .featured-event__info-date {
        font-size: 1.4rem;
        text-transform: uppercase;
        color: ${props => props.theme.black};
        margin-top: 1rem;

        @media screen and (max-width: 880px) {
          font-size: 1.2rem;
          margin-top: 0;
        }
      }
      .featured-event__info-description {
        font-size: 1rem;
        text-align: justify;
        padding-right: 3rem;
        margin-top: 2rem;

        @media screen and (max-width: 880px) {
          font-size: 0.9rem;
          padding-right: 0;
          margin-top: 0.5rem;
        }
      }
    }
  }

  .news-secondary {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    @media screen and (max-width: 600px) {
      margin-top: 2rem;
      margin-bottom: 2rem;
      grid-template-columns: 1fr;
      grid-gap: 0.5rem;
    }
    .news-secondary__article {
      @media screen and (max-width: 600px) {
        margin-top: 1rem;
      }
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

        @media screen and (max-width: 600px) {
          margin-top: 0.5rem;
        }
      }

      .news-secondary__article-link {
        display: inline-block;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 700;
        color: ${props => props.theme.primaryColor};
        margin-top: 0.5rem;
        border-bottom: 2px solid transparent;
        transition: all 0.5s ease;

        @media screen and (max-width: 600px) {
          margin-top: 0;
        }

        &:hover {
          border-bottom: 2px solid ${props => props.theme.primaryColor};
        }
      }

      /* .news-secondary__article-info {
        padding: 0 0.5rem 1.5rem 0.5rem;
      } */
    }
  }
`;
