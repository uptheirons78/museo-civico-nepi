import styled from "styled-components";

export const SocialContainer = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  transform: translateY(5px);
  &.intro {
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  .social-link {
    margin-right: 0.5rem;
    svg {
      fill: #ffffff;
      width: 3rem;
      height: 1.5rem;
      padding: 0.2rem;
    }
  }
  .social-link__envelop {
    svg {
      background: #d44638;
    }
  }
  .social-link__facebook {
    svg {
      background: #3a579a;
    }
  }
  .social-link__linkedin {
    svg {
      background: #127bb6;
    }
  }
  .social-link__twitter {
    svg {
      background: #4ab3f4;
    }
  }
`;
