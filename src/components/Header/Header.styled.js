import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { createTransition } from '@/utilities';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  justify-content: space-between;

  width: 100svw;
  padding: 10px 8px;

  background-color: #000;

  box-shadow: 0px -9px 8px 13px rgba(36, 36, 36, 0.82);

  @media screen and (min-width: 960px) {
    padding: 10px 24px 10px 16px;
  }
`;

export const LogoLink = styled(NavLink)`
  display: block;

  flex-shrink: 0;
  flex-basis: ${({ scrolled }) => (scrolled === 'true' ? '44px' : '60px')};

  color: #ffde00;

  transition: ${createTransition(['color', 'flex'], 'standart')};

  & > svg {
    display: block;

    width: 100%;
    aspect-ratio: 1;

    fill: currentColor;
  }

  &:is(:hover, :focus-visible) {
    color: #ffbf00;
  }

  @media screen and (min-width: 960px) {
    flex-basis: ${({ scrolled }) => (scrolled === 'true' ? '60px' : '80px')};
  }
`;
