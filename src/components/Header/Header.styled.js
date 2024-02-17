import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { createTransition } from '@/utilities';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;

  background-color: #000;

  box-shadow: ${({ scrolled }) =>
    scrolled ? '0px -9px 8px 13px rgba(36, 36, 36, 0.82)' : 'none'};

  border-bottom-width: 1px;
  border-bottom-style: solid;

  transition: ${createTransition(
    ['background-color', 'border-color', 'box-shadow'],
    'standart'
  )};
`;

export const HeaderSizer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  padding: 10px 8px;

  @media screen and (min-width: 960px) {
    padding: 10px 16px;
  }
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  flex-shrink: 0;
  flex-basis: ${({ scrolled }) => (scrolled === 'true' ? '44px' : '60px')};

  aspect-ratio: 1/1.07;

  color: #ffde00;

  transition: ${createTransition(['color', 'flex'], 'standart')};

  & > svg {
    display: block;

    width: 100%;
    max-height: 100%;

    fill: currentColor;
  }

  &:is(:hover, :focus-visible) {
    color: #ffbf00;
  }

  @media screen and (min-width: 960px) {
    flex-basis: ${({ scrolled }) => (scrolled === 'true' ? '60px' : '80px')};
  }
`;
