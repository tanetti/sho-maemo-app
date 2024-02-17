import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};

  background-color: #000000b0;

  transition: ${createTransition(['opacity', 'visibility'], 'standart')};

  @media screen and (min-width: 960px) {
    backdrop-filter: blur(6px);
  }
`;

export const Window = styled.div`
  position: relative;

  display: flex;

  width: calc(100% - 30px);
  max-height: calc(100svh - 30px);
  padding: 12px 4px 0 12px;

  background-color: #fff;

  border-radius: 8px;

  overflow: hidden;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

  transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(1.5)')};

  box-shadow: 0px 10px 14px -3px rgba(0, 0, 0, 0.8);

  transition: ${createTransition(['transform', 'opacity'], 'standart')};

  @media screen and (min-width: 480px) {
    width: 450px;
  }

  @media screen and (min-width: 768px) {
    width: 520px;
    max-height: calc(100dvh - 40px);

    padding: 16px 6px 0 16px;
  }
`;

export const ContentContainer = styled.div`
  position: relative;

  flex-grow: 1;

  padding: 0 8px 14px 0;

  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;

    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fa5502;

    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    margin-top: 34px;
    margin-bottom: 14px;

    background-color: #aeaeae;

    border-radius: 4px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 10px 18px 0;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      margin-top: 38px;
      margin-bottom: 18px;
    }
  }
`;

export const BottomGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 14px;

  background: linear-gradient(to bottom, #ffffff00, #ffffffff 8px, #ffffffff);

  @media screen and (min-width: 768px) {
    height: 18px;

    background: linear-gradient(
      to bottom,
      #ffffff00,
      #ffffffff 10px,
      #ffffffff
    );
  }
`;

export const Title = styled.h3`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;

  padding: 0 40px 15px 40px;

  font-size: 20px;
  font-weight: 700;

  color: #fa5502;

  background: linear-gradient(to top, #ffffff00, #ffffffff 10px, #ffffffff);

  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 480px) {
    padding: 0 40px 20px 40px;

    font-size: 22px;
  }
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 50;

  width: 100%;
  height: 100%;

  pointer-events: none;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 30;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  border: none;

  color: #949494;
  background-color: transparent;

  cursor: pointer;

  transition: ${createTransition(['color', 'transform'], 'standart')};

  &:is(:hover, :focus) {
    color: #fa5502;

    transform: scale(1.2);
  }

  & > svg {
    width: 100%;
    height: 100%;

    fill: currentColor;
  }
`;

const ResultContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 100%;
  height: 100%;
  padding: 26px;

  font-size: 22px;
  font-weight: 700;

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};

  transition: ${createTransition(['opacity', 'visibility'], 'standart')};

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;

export const LoadingContainer = styled(ResultContainer)`
  z-index: 40;

  color: #fa7734;
  background-color: #ffffffe1;

  text-shadow: 0px 0px 4px rgba(255, 255, 255, 1);

  @media screen and (min-width: 768px) {
    font-size: 26px;

    background-color: #ffffffc1;

    backdrop-filter: blur(2px);
  }
`;

export const Loader = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 50%;
  aspect-ratio: 1/1;

  &:before,
  &:after {
    content: '';

    position: absolute;

    border-radius: 50%;

    animation-duration: 1.8s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    filter: drop-shadow(0 0 1rem #fa5502ce);
  }

  &:before {
    width: 100%;
    padding-bottom: 100%;

    box-shadow: inset 0 0 0 1.7rem #fa5502;

    animation-name: pulsA;
  }

  &:after {
    width: calc(100% - 1.7rem * 2);
    padding-bottom: calc(100% - 1.7rem * 2);

    box-shadow: 0 0 0 0 #fa5502;

    animation-name: pulsB;
  }

  @media screen and (min-width: 420px) {
    width: 36%;
  }

  @keyframes pulsA {
    0% {
      box-shadow: inset 0 0 0 1.7rem #fa5502;

      opacity: 1;
    }
    50%,
    100% {
      box-shadow: inset 0 0 0 0 #fa5502;

      opacity: 0;
    }
  }

  @keyframes pulsB {
    0%,
    50% {
      box-shadow: 0 0 0 0 #fa5502;

      opacity: 0;
    }
    100% {
      box-shadow: 0 0 0 1.7rem #fa5502;

      opacity: 1;
    }
  }
`;

export const SuccessContainer = styled(ResultContainer)`
  z-index: 20;

  color: #32b354;
  background-color: #ffffff;

  & > svg {
    width: 50%;
    aspect-ratio: 1/1;

    fill: currentColor;
  }

  & > span {
    font-size: 15px;
    font-weight: 400;

    color: #616161;

    text-align: center;
  }

  @media screen and (min-width: 768px) {
    & > svg {
      width: 36%;
    }

    & > span {
      font-size: 17px;
    }
  }
`;

export const ErrorContainer = styled(ResultContainer)`
  z-index: 20;

  color: #db1a04;
  background-color: #ffffff;

  & > svg {
    width: 45%;
    aspect-ratio: 1/1;

    fill: currentColor;
  }

  & > span {
    font-size: 15px;
    font-weight: 400;

    color: #616161;

    text-align: center;
  }

  @media screen and (min-width: 768px) {
    & > svg {
      width: 30%;
    }

    & > span {
      font-size: 17px;
    }
  }
`;

export const CloseOutlineButton = styled.button`
  min-width: 140px;
  margin-top: 30px;
  padding: 8px 10px;

  font-size: 18px;

  color: #818181;
  background-color: transparent;

  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  border-color: #818181;

  cursor: pointer;

  transition: ${createTransition(
    ['color', 'background-color', 'border-color'],
    'standart'
  )};

  &:is(:hover, :focus) {
    color: #fa5502;
    background-color: #00000009;

    border-color: #fa5502;
  }

  &:disabled {
    color: #aeaeae;
    background-color: #00000009;

    border-color: #e1e1e1;

    cursor: initial;
  }
`;
