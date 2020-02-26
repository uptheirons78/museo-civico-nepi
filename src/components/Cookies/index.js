import React from "react";
import { Content } from "../Styles/StyledContent";
import HeadingSection from "../Shared/HeadingSection";

const Cookies = ({ data }) => {
  return (
    <>
      <HeadingSection>
        <h2>{data.markdownRemark.frontmatter.title}</h2>
      </HeadingSection>
      <Content
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      ></Content>
    </>
  );
};

export default Cookies;
