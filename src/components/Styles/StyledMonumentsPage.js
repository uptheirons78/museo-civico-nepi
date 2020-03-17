import styled from "styled-components";

export const StyledMonumentsSection = styled.section`
  margin: 3rem auto;
  max-width: 800px;
  width: 100%;
`;

export const StyledFeaturedMonumentCard = styled.article`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 600px) {
    grid-gap: 0;
  }

  .featured-monuments__card-a {
    grid-column: span 1;

    @media screen and (max-width: 600px) {
      grid-column: span 2;
    }
    img {
      width: 100%;
    }
  }

  .featured-monuments__card-b {
    grid-column: span 1;
    padding: 0 2rem;

    @media screen and (max-width: 800px) {
      padding: 0 0.5rem;
    }

    @media screen and (max-width: 600px) {
      grid-column: span 2;
      padding: 0 0;
    }

    h3 {
      margin-top: 0.5rem;
      color: ${props => props.theme.primaryColor};
      text-transform: uppercase;

      @media screen and (max-width: 800px) {
        font-size: 1.1rem;
        margin-top: 0;
      }
    }

    h4 {
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
      color: ${props => props.theme.black};

      @media screen and (max-width: 800px) {
        font-size: 1rem;
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    p {
      font-size: 0.9rem;
      line-height: 1.5;

      @media screen and (max-width: 800px) {
        font-size: 0.8rem;
      }
      @media screen and (max-width: 600px) {
        font-size: 0.9rem;
      }
    }

    a {
      display: inline-block;
      color: ${props => props.theme.primaryColor};
      font-size: 0.9rem;
      font-weight: 600;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: all 0.75s ease;

      @media screen and (max-width: 800px) {
        font-size: 0.8rem;
      }
      @media screen and (max-width: 600px) {
        font-size: 0.9rem;
      }

      &:hover {
        border-bottom: 1px solid ${props => props.theme.primaryColor};
      }

      &.article-link {
        text-decoration: none;
        border-bottom: none;
      }
    }
  }
`;

export const StyledOtherMonumentCard = styled.article`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 0 1rem;

  h3 {
    margin-top: 0.5rem;
    color: ${props => props.theme.primaryColor};
    text-transform: uppercase;
  }

  h4 {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    color: ${props => props.theme.black};
  }

  p {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  a {
    display: inline-block;
    color: ${props => props.theme.primaryColor};
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.75s ease;

    &:hover {
      border-bottom: 1px solid ${props => props.theme.primaryColor};
    }

    &.article-link {
      text-decoration: none;
      border-bottom: none;
    }
  }
`;
