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

export const Main = styled.section`
  margin-top: 3rem;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-size: 1.6rem;
  color: ${props => props.theme.primaryColor};
`;

export const DoubleGrid = styled.div`
  margin-top: ${props => props.top || "1rem"};
  margin-bottom: ${props => props.bottom || "1rem"};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  .left-block {
    grid-column: span 1;
  }
  .right-block {
    grid-column: span 1;
  }

  .text-block {
    h4 {
      padding-left: 2rem;
      padding-right: 2rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      font-size: 1.6rem;
      color: ${props => props.theme.primaryColor};

      @media screen and (max-width: 800px) {
        padding-left: 1rem;
        padding-right: 1rem;
      }

      @media screen and (max-width: 600px) {
        margin-top: 0;
        padding-left: 0;
        padding-right: 0;
      }
    }
    p {
      padding-left: 2rem;
      padding-right: 2rem;

      @media screen and (max-width: 800px) {
        padding-left: 1rem;
        padding-right: 1rem;
      }

      @media screen and (max-width: 600px) {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
`;

export const ContactInfo = styled.span`
  color: ${props => props.theme.primaryColor};
  font-weight: 600;
`;

export const ServiceTitle = styled.h4`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-size: 1.6rem;
  color: ${props => props.theme.primaryColor};

  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
`;

export const ServiceArticle = styled.article`
  margin: 1rem 0;
  h5 {
    margin-top: 0.5rem;
    text-transform: uppercase;
    font-size: 1.1rem;
    color: ${props => props.theme.primaryColor};

    @media screen and (max-width: 600px) {
      margin-top: 0;
    }
  }
`;

export const PubblicazioniImageContainer = styled.div`
  max-width: 240px;
  width: 100%;

  @media screen and (max-width: 500px) {
    max-width: 180px;
  }
`;
