import styled from "styled-components";

export const SinglePageWrapper = styled.section`
  max-width: 800px;
  width: 100%;
  margin: 2rem auto;
  padding: 1rem;
`;

export const PageDescription = styled.h4`
  max-width: 800px;
  width: 100%;
  line-height: 1.5;
  color: ${props => props.theme.black};
  opacity: 0.9;
  font-weight: 700;
  font-size: 1.4rem;
  text-align: justify;

  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
  }
`;
