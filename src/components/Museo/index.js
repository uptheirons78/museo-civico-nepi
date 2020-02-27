import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import HeadingSection from "../Shared/HeadingSection";
import { Description } from "../Styles/StyledContent";

// Queries
const query = graphql`
  query {
    museoA: file(relativePath: { eq: "museo-01.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    museoB: file(relativePath: { eq: "museo-02.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    museoC: file(relativePath: { eq: "museo-03.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    museoD: file(relativePath: { eq: "museo-04.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Museo = ({ data }) => {
  const { museoA, museoC, museoD } = useStaticQuery(query);
  const {
    title,
    description,
    textA,
    textB,
    textC,
    textD,
  } = data.markdownRemark.frontmatter;
  return (
    <>
      <HeadingSection>
        <h2>{title}</h2>
      </HeadingSection>
      <Description>
        <h4>{description}</h4>
      </Description>
      <StyledMuseo>
        <div className="section-a">
          <div className="section-a__left">
            <p>{textA}</p>
            <p>{textB}</p>
          </div>
          <div className="section-a__right">
            <Img fluid={museoA.childImageSharp.fluid} />
          </div>
        </div>
        <div className="section-b">
          <div className="section-b__left">
            <Img fluid={museoC.childImageSharp.fluid} />
          </div>
          <div className="section-b__right">
            <p>{textC}</p>
            <p>{textD}</p>
          </div>
        </div>
        <div className="section-c">
          <Img fluid={museoD.childImageSharp.fluid} />
        </div>
      </StyledMuseo>
    </>
  );
};

export default Museo;

const StyledMuseo = styled.section`
  margin-top: 3rem;
  margin-bottom: 3rem;

  p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    text-align: justify;
  }

  .section-a {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .section-a__left {
      grid-column: span 1;
      p {
        padding-left: 2rem;
        padding-right: 2rem;
        margin-right: 2rem;
      }
    }
    .section-a__right {
      grid-column: span 1;
    }
  }
  .section-b {
    width: 80%;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    .section-b__left {
      grid-column: span 1;
    }
    .section-b__right {
      grid-column: span 1;
      p {
        padding-left: 2rem;
        padding-right: 2rem;
        margin-left: 2rem;

        &:first-child {
          margin-top: 3rem;
        }
      }
    }
  }

  .section-c {
    width: 80%;
    margin: 3rem auto;
  }
`;
