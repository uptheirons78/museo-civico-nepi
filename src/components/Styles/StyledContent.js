import styled from "styled-components";

export const Content = styled.div`
  padding: 2rem 1rem;

  p {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  h4 {
    font-size: 1.4rem;
    color: ${props => props.theme.primaryColor};
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
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
        color: ${props => props.theme.primaryColor};
      }
    }
  }

  a {
    text-decoration: none;
  }
`;
