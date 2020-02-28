import styled from "styled-components";

export const StyledStoria = styled.section`
  margin-top: 3rem;

  h4 {
    color: ${props => props.theme.primaryColor};
    text-transform: uppercase;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    margin-top: 1rem;
  }
  p {
    padding: 1rem 2rem;
  }

  .block {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .left {
      grid-column: span 1;
    }

    .right {
      grid-column: span 1;
    }
  }

  .second-block {
    margin-top: 3rem;
  }

  .third-block {
    margin-top: 3rem;
  }
`;
