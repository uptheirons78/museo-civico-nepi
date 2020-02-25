import React from "react";
import { Link } from "gatsby";

import { StyledActivities } from "../Styles/StyledActivities";

// Images
import didattica from "../../images/didattica.jpg";
import percorsi from "../../images/percorsi.jpg";
import visite from "../../images/visite.jpg";

import * as translate from "../../utils/translate.json";

const Activities = ({ language }) => {
  return (
    <StyledActivities className="museum-activities">
      <Link to={translate.default.activities.cardOne.link[`${language}`]}>
        <div
          className="museum-activities__single-activity one"
          style={{ backgroundImage: `url(${visite})` }}
        >
          <div className="museum-activities__content">
            <h3>{translate.default.activities.cardOne[`${language}`]}</h3>
            <div className="inner">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </Link>
      <Link to={translate.default.activities.cardTwo.link[`${language}`]}>
        <div
          className="museum-activities__single-activity two"
          style={{ backgroundImage: `url(${percorsi})` }}
        >
          <div className="museum-activities__content">
            <h3>{translate.default.activities.cardTwo[`${language}`]}</h3>
            <div className="inner">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </Link>
      <Link to={translate.default.activities.cardThree.link[`${language}`]}>
        <div
          className="museum-activities__single-activity three"
          style={{ backgroundImage: `url(${didattica})` }}
        >
          <div className="museum-activities__content">
            <h3>{translate.default.activities.cardThree[`${language}`]}</h3>
            <div className="inner">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </Link>
    </StyledActivities>
  );
};

export default Activities;
