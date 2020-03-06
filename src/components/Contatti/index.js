import React from "react";
import { graphql, useStaticQuery } from "gatsby";

// Components
import HeadingSection from "../Shared/HeadingSection";
import {
  SinglePageWrapper,
  PageDescription,
  Main,
  DoubleGrid,
  ContactInfo,
} from "../Styles/StyledPageElement";
import Mappa from "../Shared/Map";
import Form from "./Form";

import * as translate from "../../utils/translate.json";

const Contatti = ({ language }) => {
  /**
   * Languages
   */
  const { address, telephone, arrive } = translate.default.contact;
  /**
   * Static Query
   */
  const { markdownRemark } = useStaticQuery(contactPageQuery);
  const { frontmatter } = markdownRemark;
  /**
   * Coordinate Mappe
   */
  const coordinate = [
    {
      nome: "sede",
      lat: 42.242757,
      lng: 12.348116,
    },
  ];

  return (
    <>
      <HeadingSection>
        <h2>{frontmatter[`${language}`].pageTitle}</h2>
      </HeadingSection>
      <SinglePageWrapper>
        <PageDescription>
          {frontmatter[`${language}`].pageDescription}
        </PageDescription>
        <Main>
          <DoubleGrid top="3rem" bottom="3rem">
            <div className="left-block text-block">
              <h4>{frontmatter[`${language}`].title}</h4>
              <div>
                <p>
                  <ContactInfo>{address[`${language}`]}: </ContactInfo>
                  {frontmatter[`${language}`].address} 01036 Nepi (VT)
                </p>
                <p>
                  <ContactInfo>{telephone[`${language}`]}: </ContactInfo>
                  {frontmatter[`${language}`].telephone}
                </p>
                <p>
                  <ContactInfo>Email: </ContactInfo>
                  {frontmatter[`${language}`].email}
                </p>
              </div>
              <div style={{ marginTop: "2rem", textAlign: "justify" }}>
                <p>
                  <ContactInfo>{arrive[`${language}`]}: </ContactInfo>
                  {frontmatter[`${language}`].description}
                </p>
              </div>
            </div>
            <div className="right-block">
              <Form language={language} />
            </div>
          </DoubleGrid>
          <Mappa coordinate={coordinate} />
        </Main>
      </SinglePageWrapper>
    </>
  );
};

export default Contatti;

// Query
const contactPageQuery = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "contact" } }) {
      frontmatter {
        it {
          pageTitle
          pageDescription
          title
          description
          address
          city
          cap
          telephone
          email
        }
        en {
          pageTitle
          pageDescription
          title
          description
          address
          city
          cap
          telephone
          email
        }
      }
    }
  }
`;
