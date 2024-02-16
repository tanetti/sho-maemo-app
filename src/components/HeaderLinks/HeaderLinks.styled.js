import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const LinkList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const LinkItem = styled.li`
  display: flex;
  flex-basis: ${({ scrolled }) => (scrolled ? '44px' : '50px')};

  aspect-ratio: 1;

  padding: 6px 6px;

  transition: ${createTransition('flex', 'standart')};

  @media screen and (min-width: 768px) {
    flex-basis: ${({ scrolled }) => (scrolled ? '50px' : '58px')};
  }
`;

export const HeaderLink = styled.a`
  flex-basis: 100%;

  color: #ffde00;

  transition: ${createTransition('color', 'standart')};

  & > svg {
    max-width: 100%;
    max-height: 100%;

    fill: currentColor;
  }

  &:is(:hover, :focus-visible) {
    color: #ffbf00;
  }
`;
