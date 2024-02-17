import { createTransition } from '@/utilities';
import styled from '@emotion/styled';

export const ContainedButton = styled.button`
  display: block;

  min-width: 100px;

  margin-inline: auto;
  padding: 9px 40px 8px 40px;

  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;

  color: #000;
  background-color: #ffde00;

  border-width: 0;
  border-radius: 8px;

  cursor: pointer;

  text-transform: uppercase;

  transition: ${createTransition(
    ['transform', 'background-color'],
    'standart'
  )};

  &:is(:hover, :focus-visible) {
    background-color: #ffbf00;

    transform: scale(1.1);
  }
`;
