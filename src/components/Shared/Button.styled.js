import { createTransition } from '@/utilities';
import styled from '@emotion/styled';

export const ContainedButton = styled.button`
  display: block;

  min-width: 100px;

  margin-inline: auto;
  padding: 8px 40px;

  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;

  color: #000;
  background-color: #ffde00;

  border-width: 2px;
  border-style: solid;
  border-radius: 8px;
  border-color: transparent;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  cursor: pointer;

  text-transform: uppercase;

  transition: ${createTransition('background-color', 'standart')};

  &:is(:hover, :focus-visible) {
    background-color: #ffbf00;
  }

  @media screen and (min-width: 960px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 22px;
  }
`;

export const ContainedRequestButton = styled(ContainedButton)`
  width: 100%;
  margin-inline: 0;
  padding: 7px 10px 6px 10px;

  font-size: 16px;
  font-weight: 500;

  @media screen and (min-width: 480px) {
    font-size: 18px;
  }

  @media screen and (min-width: 960px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const OutlinedButton = styled.button`
  display: block;

  min-width: 100px;

  margin-inline: auto;
  padding: 8px 40px;

  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;

  color: #333;
  background-color: #fff;

  border-width: 2px;
  border-style: solid;
  border-radius: 8px;
  border-color: #ffde00;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  cursor: pointer;

  text-transform: uppercase;

  transition: ${createTransition(
    ['border-color', 'background-color'],
    'standart'
  )};

  &:is(:hover, :focus-visible) {
    border-color: #ffbf00;
    background-color: #ffde0030;
  }

  @media screen and (min-width: 960px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 22px;
  }
`;

export const OutlinedRequestButton = styled(OutlinedButton)`
  width: 100%;
  margin-inline: 0;
  padding: 7px 10px 6px 10px;

  font-size: 16px;
  font-weight: 400;

  @media screen and (min-width: 480px) {
    font-size: 18px;
  }

  @media screen and (min-width: 960px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 12px;

  @media screen and (min-width: 480px) {
    gap: 18px;
  }
`;
