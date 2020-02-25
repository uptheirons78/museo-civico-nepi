import styled from "styled-components";

export const Content = styled.section`
  padding: 2rem 1rem;

  p {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  h1,
  h2,
  h3 {
    color: ${props => props.theme.primaryColor};
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  h4 {
    font-size: 1.4rem;
    color: ${props => props.theme.primaryColor};
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
  }

  img {
    display: block;
    margin: 1rem auto;
    max-width: 600px;
    width: 100%;
  }
  em {
    font-weight: 600;
    color: ${props => props.theme.primaryColor};
  }

  strong {
    font-weight: 700;
    color: ${props => props.theme.primaryColor};
  }

  ul {
    list-style: none;
    font-size: 0.9rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    li {
      padding-left: 1rem;
      text-indent: -0.7rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      &:before {
        content: "• ";
        font-weight: bold;
        color: ${props => props.theme.primaryColor};
      }
    }
  }

  a {
    text-decoration: none;
  }
`;

export const Description = styled.section`
  margin-top: 2rem;
  padding: 0 1rem;
  h4 {
    line-height: 1.5;
    color: ${props => props.theme.black};
    font-weight: 600;
    font-size: 1.3rem;
    font-style: italic;
  }
`;

export const Info = styled.section`
  margin-top: 1rem;
  padding: 0 1rem;

  h2 {
    color: ${props => props.theme.primaryColor};
    font-weight: 700;
  }

  .info-section {
    margin-top: 1rem;
    h3 {
      margin-top: 0.5rem;
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

export const SectionTitle = styled.h1`
  padding: 1rem;
  color: ${props => props.theme.primaryColor};
  font-size: 1.8rem;
  text-transform: uppercase;

  @media screen and (max-width: 600px) {
    font-size: 1.6rem;
  }
`;
