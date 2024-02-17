import styled from '@emotion/styled';
import { createTransition } from '@/utilities';
import PrinterWebp360x1 from '@/assets/printer/printer360x1.webp';
import PrinterWebp360x2 from '@/assets/printer/printer360x2.webp';
import PrinterWebp360x3 from '@/assets/printer/printer360x3.webp';
import PrinterJpg360x1 from '@/assets/printer/printer360x1.jpg';
import PrinterJpg360x2 from '@/assets/printer/printer360x2.jpg';
import PrinterJpg360x3 from '@/assets/printer/printer360x3.jpg';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;

  min-height: 480px;
  height: calc(100svh - 80px);

  will-change: height;

  transition: ${createTransition('height', 'standart')};

  @media screen and (min-width: 960px) {
    height: calc(100svh - 100px);
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  flex-basis: 60%;
`;

export const ImageContainer = styled.div`
  flex-grow: 1;
  flex-basis: 70%;

  background-repeat: no-repeat;
  background-size: 360px;
  background-position: center;
  background-image: ${`url(${PrinterJpg360x1})`};
  background-image: ${`url(${PrinterWebp360x1})`};

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${`url(${PrinterJpg360x2})`};
    background-image: ${`url(${PrinterWebp360x2})`};
  }

  @media (min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    background-image: ${`url(${PrinterJpg360x3})`};
    background-image: ${`url(${PrinterWebp360x3})`};
  }
`;

export const DescriptionContainer = styled.p`
  flex-grow: 1;
  flex-basis: 30%;

  font-size: 20px;
  line-height: 1.12;

  text-align: center;

  & > span {
    font-weight: 700;
  }
`;

export const RequestContainer = styled.div`
  flex-grow: 1;
  flex-basis: 40%;

  outline: 1px solid green;
  outline-offset: -1px;
`;
