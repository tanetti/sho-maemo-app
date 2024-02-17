import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const StepContainer = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  aspect-ratio: 1/1.6;

  opacity: ${({ isStepVisible }) => (isStepVisible ? 1 : 0)};
  visibility: ${({ isStepVisible }) => (isStepVisible ? 'visible' : 'hidden')};

  transition: ${createTransition(['opacity', 'visibility'], 'standart')};

  @media screen and (max-width: 767.98px) {
    max-width: 440px;
  }

  @media screen and (min-width: 768px) {
    aspect-ratio: 1.25/1;
  }
`;
