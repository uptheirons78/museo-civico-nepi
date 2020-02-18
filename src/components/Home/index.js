import React from "react";
import { Content } from "../Styles/StyledContent";
import HeadingSection from "../Shared/HeadingSection";

const Home = ({ data }) => {
  return (
    <>
      <HeadingSection title={data.markdownRemark.frontmatter.title} />
      <Content
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      ></Content>
    </>
  );
};

export default Home;
