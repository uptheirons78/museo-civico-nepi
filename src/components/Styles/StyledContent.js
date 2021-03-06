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
    max-width: 400px;
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

  ol {
    list-style: none;
    counter-reset: li;
    font-size: 0.9rem;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 20px;

    li::before {
      content: counter(li);
      color: ${props => props.theme.primaryColor};
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
      margin-left: -1.5em;
      margin-right: 0.5em;
      text-align: right;
      direction: rtl;
    }

    li {
      counter-increment: li;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
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
    color: ${props => props.theme.primaryColor};
    font-weight: 600;
  }
`;

export const Description = styled.section`
  margin-top: 2rem;
  padding: 0 1rem;
  h4 {
    line-height: 1.5;
    color: ${props => props.theme.black};
    opacity: 0.9;
    font-weight: 700;
    font-size: 1.4rem;
    text-align: justify;

    @media screen and (max-width: 600px) {
      font-size: 1.1rem;
    }
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

      @media screen and (max-width: 600px) {
        font-size: 1.1rem;
      }
    }
    p {
      font-size: 0.9rem;
      @media screen and (max-width: 600px) {
        font-size: 0.8rem;
      }
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
  @media screen and (max-width: 400px) {
    font-size: 1.3rem;
  }
`;
