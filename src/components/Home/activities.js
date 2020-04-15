import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import { StyledActivities } from "../Styles/StyledActivities";

import * as translate from "../../utils/translate.json";

const Activities = ({ language }) => {
  const { firstPicture, secondPicture, thirdPicture } = useStaticQuery(
    activitiesQuery
  );
  return (
    <StyledActivities className="museum-activities">
      <Link to={translate.default.activities.cardOne.link[`${language}`]}>
        <div
          className="museum-activities__single-activity one"
          style={{
            backgroundImage: `url(${thirdPicture.childImageSharp.fixed.src})`,
          }}
        >
          <div className="museum-activities__content">
            <h3>{translate.default.activities.cardOne[`${language}`]}</h3>
            <div className="inner">
              <p>
                {translate.default.activities.cardOne.innerText[`${language}`]}
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link to={translate.default.activities.cardTwo.link[`${language}`]}>
        <div
          className="museum-activities__single-activity two"
          style={{
            backgroundImage: `url(${secondPicture.childImageSharp.fixed.src})`,
          }}
        >
          <div className="museum-activities__content">
            <h3>{translate.default.activities.cardTwo[`${language}`]}</h3>
            <div className="inner">
              <p>
                {translate.default.activities.cardTwo.innerText[`${language}`]}
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link to={translate.default.activities.cardThree.link[`${language}`]}>
        <div
          className="museum-activities__single-activity three"
          style={{
            backgroundImage: `url(${firstPicture.childImageSharp.fixed.src})`,
          }}
        >
          <div className="museum-activities__content">
            <h3>{translate.default.activities.cardThree[`${language}`]}</h3>
            <div className="inner">
              <p>
                {
                  translate.default.activities.cardThree.innerText[
                    `${language}`
                  ]
                }
              </p>
            </div>
          </div>
        </div>
      </Link>
    </StyledActivities>
  );
};

export default Activities;

// Query
const activitiesQuery = graphql`
  query {
    firstPicture: file(relativePath: { eq: "museo/didattica-04.jpg" }) {
      childImageSharp {
        fixed(width: 400) {
          src
        }
      }
    }
    secondPicture: file(relativePath: { eq: "museo/didattica-01.jpg" }) {
      childImageSharp {
        fixed(width: 400) {
          src
        }
      }
    }
    thirdPicture: file(relativePath: { eq: "museo/scientifica-04.jpg" }) {
      childImageSharp {
        fixed(width: 400) {
          src
        }
      }
    }
  }
`;
