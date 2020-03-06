import React from "react";

// Components
import HeadingSection from "../Shared/HeadingSection";
import {
  SinglePageWrapper,
  PageDescription,
  Main,
  DoubleGrid,
} from "../Styles/StyledPageElement";
import Mappa from "../Shared/Map";
import Form from "./Form";

const Contatti = ({ language }) => {
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
        <h2>Contatti</h2>
      </HeadingSection>
      <SinglePageWrapper>
        <PageDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laboriosam
          assumenda rem?
        </PageDescription>
        <Main>
          <DoubleGrid top="3rem" bottom="3rem">
            <div className="left-block text-block">
              <h4>Title</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt reiciendis molestiae consequatur nisi animi temporibus
                veritatis reprehenderit nostrum sunt recusandae! Dolore ullam
                quae autem cupiditate.
              </p>
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
