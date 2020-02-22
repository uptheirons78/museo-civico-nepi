import styled from "styled-components";

export const StyledActivities = styled.section`
  padding: 0 1rem 2rem 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  .museum-activities__single-activity {
    min-height: 200px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }
  .museum-activities__content {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
    background: rgba(0, 0, 0, 0.4);
    overflow: hidden;
    h3 {
      color: #fff;
      letter-spacing: 1px;
      text-transform: uppercase;
      opacity: 1;
      visibility: visible;
      transition: all 0.75s ease-in-out;
    }

    &:hover {
      .inner {
        top: 0;
        opacity: 0.9;
        visibility: visible;
      }

      h3 {
        opacity: 0;
        visibility: hidden;
      }
    }

    .inner {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${props => props.theme.primaryColor};
      opacity: 0;
      visibility: hidden;
      transition: all 0.75s ease-in-out;

      p {
        color: #fff;
      }
    }
  }
`;
