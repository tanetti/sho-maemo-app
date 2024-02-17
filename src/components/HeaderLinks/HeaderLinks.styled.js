import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const LinkList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const LinkItem = styled.li`
  flex-basis: ${({ scrolled }) => (scrolled ? '44px' : '50px')};

  transition: ${createTransition('flex', 'standart')};

  @media screen and (min-width: 960px) {
    flex-basis: ${({ scrolled }) => (scrolled ? '50px' : '58px')};
  }
`;

export const HeaderLink = styled.a`
  display: block;

  padding: 6px 6px;

  color: #ffde00;

  transition: ${createTransition('color', 'standart')};

  & > svg {
    display: block;

    width: 100%;
    aspect-ratio: 1;

    fill: currentColor;
  }

  &:is(:hover, :focus-visible) {
    color: #ffbf00;
  }
`;
