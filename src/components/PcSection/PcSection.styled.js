import styled from '@emotion/styled';

import PcWebp360x1 from '@/assets/pc/pc360x1.webp';
import PcWebp360x2 from '@/assets/pc/pc360x2.webp';
import PcWebp360x3 from '@/assets/pc/pc360x3.webp';
import PcJpg360x1 from '@/assets/pc/pc360x1.jpg';
import PcJpg360x2 from '@/assets/pc/pc360x2.jpg';
import PcJpg360x3 from '@/assets/pc/pc360x3.jpg';

import PcWebp640x1 from '@/assets/pc/pc640x1.webp';
import PcWebp640x2 from '@/assets/pc/pc640x2.webp';
import PcJpg640x1 from '@/assets/pc/pc640x1.jpg';
import PcJpg640x2 from '@/assets/pc/pc640x2.jpg';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;

  min-height: 420px;
  height: 60svh;

  @media screen and (min-width: 960px) {
    flex-direction: row-reverse;
    justify-content: center;

    min-height: 520px;
  }
`;

export const ImageContainer = styled.div`
  flex-grow: 1;
  flex-basis: 56%;

  background-repeat: no-repeat;
  background-size: 360px;
  background-position: center;
  background-image: ${`url(${PcJpg360x1})`};
  background-image: ${`url(${PcWebp360x1})`};

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${`url(${PcJpg360x2})`};
    background-image: ${`url(${PcWebp360x2})`};
  }

  @media (min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    background-image: ${`url(${PcJpg360x3})`};
    background-image: ${`url(${PcWebp360x3})`};
  }

  @media screen and (min-width: 960px) {
    flex-basis: 50%;

    max-width: 640px;

    background-size: 640px;
    background-image: ${`url(${PcJpg640x1})`};
    background-image: ${`url(${PcWebp640x1})`};

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${`url(${PcJpg640x2})`};
      background-image: ${`url(${PcWebp640x2})`};
    }
  }
`;

export const CaptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14%;
  flex-basis: 44%;

  @media screen and (min-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 50%;

    max-width: 640px;

    font-size: 30px;
  }
`;

export const CaptionTitle = styled.h2`
  margin-bottom: 15px;

  font-size: 20px;
  font-weight: 400;
  line-height: 1.12;

  text-align: center;

  & > span {
    font-weight: 700;
  }

  @media screen and (min-width: 960px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;
