import styled from '@emotion/styled';

import PrinterWebp360x1 from '@/assets/printer/printer360x1.webp';
import PrinterWebp360x2 from '@/assets/printer/printer360x2.webp';
import PrinterWebp360x3 from '@/assets/printer/printer360x3.webp';
import PrinterJpg360x1 from '@/assets/printer/printer360x1.jpg';
import PrinterJpg360x2 from '@/assets/printer/printer360x2.jpg';
import PrinterJpg360x3 from '@/assets/printer/printer360x3.jpg';

import PrinterWebp640x1 from '@/assets/printer/printer640x1.webp';
import PrinterWebp640x2 from '@/assets/printer/printer640x2.webp';
import PrinterJpg640x1 from '@/assets/printer/printer640x1.jpg';
import PrinterJpg640x2 from '@/assets/printer/printer640x2.jpg';

import SheetWebp480x1 from '@/assets/sheet/sheet480x1.webp';
import SheetWebp480x2 from '@/assets/sheet/sheet480x2.webp';
import SheetWebp480x3 from '@/assets/sheet/sheet480x3.webp';
import SheetJpg480x1 from '@/assets/sheet/sheet480x1.jpg';
import SheetJpg480x2 from '@/assets/sheet/sheet480x2.jpg';
import SheetJpg480x3 from '@/assets/sheet/sheet480x3.jpg';

import SheetWebp960x1 from '@/assets/sheet/sheet960x1.webp';
import SheetWebp960x2 from '@/assets/sheet/sheet960x2.webp';
import SheetWebp960x3 from '@/assets/sheet/sheet960x3.webp';
import SheetJpg960x1 from '@/assets/sheet/sheet960x1.jpg';
import SheetJpg960x2 from '@/assets/sheet/sheet960x2.jpg';
import SheetJpg960x3 from '@/assets/sheet/sheet960x3.jpg';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;

  min-height: 480px;
  height: calc(100svh - 80px);

  @media screen and (min-width: 960px) {
    min-height: 580px;
    height: calc(100svh - 100px);
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  flex-basis: 56%;

  @media screen and (min-width: 960px) {
    flex-direction: row;
    justify-content: center;
  }
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

  @media screen and (min-width: 960px) {
    flex-basis: 50%;

    max-width: 640px;

    background-size: 640px;
    background-image: ${`url(${PrinterJpg640x1})`};
    background-image: ${`url(${PrinterWebp640x1})`};

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${`url(${PrinterJpg640x2})`};
      background-image: ${`url(${PrinterWebp640x2})`};
    }
  }
`;

export const DescriptionContainer = styled.div`
  flex-grow: 1;
  flex-basis: 30%;

  font-size: 20px;
  line-height: 1.12;

  text-align: center;

  & span {
    font-weight: 700;
  }

  @media screen and (min-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 50%;

    max-width: 640px;

    font-size: 30px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;

export const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14%;
  flex-grow: 1;
  flex-basis: 44%;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.75)
    ),
    ${`url(${SheetJpg480x1})`};
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.75)
    ),
    ${`url(${SheetWebp480x1})`};

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0.75)
      ),
      ${`url(${SheetJpg480x2})`};
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0.75)
      ),
      ${`url(${SheetWebp480x2})`};
  }

  @media (min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0.75)
      ),
      ${`url(${SheetJpg480x3})`};
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0.75)
      ),
      ${`url(${SheetWebp480x3})`};
  }

  @media screen and (min-width: 480px) {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0.75)
      ),
      ${`url(${SheetJpg960x1})`};
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0.75)
      ),
      ${`url(${SheetWebp960x1})`};

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.75),
          rgba(0, 0, 0, 0.75)
        ),
        ${`url(${SheetJpg960x2})`};
      background-image: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.75),
          rgba(0, 0, 0, 0.75)
        ),
        ${`url(${SheetWebp960x2})`};
    }

    @media (min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      background-image: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.75),
          rgba(0, 0, 0, 0.75)
        ),
        ${`url(${SheetJpg960x3})`};
      background-image: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.75),
          rgba(0, 0, 0, 0.75)
        ),
        ${`url(${SheetWebp960x3})`};
    }
  }
`;

export const Caption = styled.div`
  color: #fff;
`;

export const CaptionTitle = styled.h2`
  margin-bottom: 15px;

  font-size: 20px;
  font-weight: 400;

  & > span {
    font-weight: 700;
  }

  @media screen and (min-width: 960px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

export const CaptionList = styled.ul`
  line-height: 1.26;

  list-style: disc;

  @media screen and (min-width: 960px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const CaptionItem = styled.li`
  width: fit-content;
  margin-inline: auto;

  & > b {
    font-weight: 400;

    color: #a5a5a5;
  }

  & > span {
    text-transform: uppercase;
    text-decoration: line-through;
  }
`;
