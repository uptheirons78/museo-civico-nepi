import React from "react";

import { StyledActivities } from "../Styles/StyledActivities";

// Images
import didattica from "../../images/didattica.jpg";
import percorsi from "../../images/percorsi.jpg";
import visite from "../../images/visite.jpg";

const Activities = () => {
  return (
    <StyledActivities className="museum-activities">
      <div
        className="museum-activities__single-activity one"
        style={{ backgroundImage: `url(${visite})` }}
      >
        <div className="museum-activities__content">
          <h3>visite guidate</h3>
          <div className="inner">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div
        className="museum-activities__single-activity two"
        style={{ backgroundImage: `url(${percorsi})` }}
      >
        <div className="museum-activities__content">
          <h3>percorsi di visita</h3>
          <div className="inner">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div
        className="museum-activities__single-activity three"
        style={{ backgroundImage: `url(${didattica})` }}
      >
        <div className="museum-activities__content">
          <h3>attività didattica</h3>
          <div className="inner">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </StyledActivities>
  );
};

export default Activities;
