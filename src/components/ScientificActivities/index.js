import React from "react";
import HeadingSection from "../Shared/HeadingSection";
import {
  SinglePageWrapper,
  PageDescription,
} from "../Styles/StyledPageElement";

const ScientificActivities = ({ data, language }) => {
  return (
    <div>
      <HeadingSection thumbnail={data.banner.childImageSharp.fixed.src}>
        <h2>
          {language === "it"
            ? "Attività Scientifiche"
            : "Scientific Activities"}
        </h2>
      </HeadingSection>
      <SinglePageWrapper>
        <PageDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          esse expedita officiis excepturi pariatur quam! Odit corporis fugiat
          necessitatibus distinctio!
        </PageDescription>
      </SinglePageWrapper>
    </div>
  );
};

export default ScientificActivities;
