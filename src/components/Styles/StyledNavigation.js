import styled from "styled-components";

export const Navigation = styled.nav`
  background: #fff;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 0;
    transition: all 0.5s ease;
    li {
      position: relative;
      flex-grow: 1;
      text-align: center;
      padding: 0.2rem 0;
      &:not(:first-child) {
        border-left: 1px solid #ccc;
      }
      a {
        color: #434343;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.1rem;
        @media screen and (max-width: 900px) {
          font-size: 0.9rem !important;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    li {
      &:nth-child(1) {
        display: none;
      }
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(3) {
        display: none;
      }
      &:nth-child(4) {
        display: none;
      }
    }
  }
  .navigation__item:hover .dropdown {
    display: flex;
    visibility: visible;
    opacity: 1;
    transition: all 0.5s ease;
  }
  .dropdown {
    visibility: hidden;
    display: none;
    flex-direction: column;
    position: absolute;
    opacity: 0;
    top: 0;
    left: 50%;
    z-index: 100;
    width: 100%;
    margin-top: 2rem;
    padding: 0.5rem 0.3rem;
    text-align: left;
    background: ${props => props.theme.primaryColor};
    transition: all 0.5s ease;
    transform: translateX(-50%);
    box-shadow: 18px 0 22px -4px rgba(0, 0, 0, 0.4),
      -18px 0 22px -4px rgba(0, 0, 0, 0.4);
    .dropdown__item {
      border: none;
      a {
        color: ${props => props.theme.white};
        font-size: 0.7rem;
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
        font-weight: 600;
      }
    }
  }
`;
