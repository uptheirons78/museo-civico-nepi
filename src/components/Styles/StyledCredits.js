import styled from "styled-components";

export const StyledCredits = styled.section`
  background: ${props => props.theme.primaryColor};
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .credits__section-left {
    .credits__trip-image {
      width: 150px;
    }
  }
  .credits__section-right {
    text-align: right;
  }
  .credits__text {
    margin-top: -5px;
    font-size: 0.7rem;
    color: ${props => props.theme.white};
    line-height: 2;
    a {
      font-size: 0.7rem;
      color: ${props => props.theme.white};
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    .credits__section-right {
      text-align: left;
      margin-top: 0.5rem;
    }
  }
`;
