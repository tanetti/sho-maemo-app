import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const FooterContainer = styled.footer`
  justify-self: flex-end;

  padding: 40px 12px;

  color: #fff;
  background-color: #000;

  box-shadow: 0px 12px 8px 13px rgba(36, 36, 36, 0.82);

  @media screen and (min-width: 960px) {
    display: flex;

    padding: 60px;

    & > div {
      flex-grow: 1;
    }
  }
`;

export const MobileTitle = styled.p`
  display: block;

  margin-bottom: 15px;

  font-size: 20px;
  font-weight: 600;

  text-align: center;

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

export const TabletTitle = styled.p`
  display: none;

  @media screen and (min-width: 960px) {
    display: block;

    font-size: 32px;
    font-weight: 600;

    text-align: center;
  }
`;

export const MapFrame = styled.iframe`
  display: block;

  width: 100%;
  max-width: 480px;
  margin-inline: auto;

  aspect-ratio: 2/1;

  border-width: 0;
  border-radius: 8px;

  outline: transparent;

  @media screen and (min-width: 960px) {
    max-width: 1440px;
    height: 100%;

    aspect-ratio: auto;
  }
`;

export const LinkList = styled.ul`
  margin-bottom: 4px;
  padding-block: 15px;
`;

export const Link = styled.a`
  display: block;

  width: fit-content;
  margin-inline: auto;
  padding-block: 3px;

  color: inherit;

  transition: ${createTransition('color', 'standart')};

  &:is(:hover, :focus-visible) {
    color: #ffde00;
  }
`;

export const Line = styled.div`
  width: 50%;
  max-width: 180px;
  margin-inline: auto;

  border-bottom: 2px solid #aaaaaa;
`;

export const IconLinkList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  padding-block: 20px;
  margin-bottom: 10px;
`;

export const IconLink = styled.a`
  display: block;

  width: 36px;

  color: inherit;

  transition: ${createTransition('color', 'standart')};

  & > svg {
    display: block;

    width: 100%;
    aspect-ratio: 1;

    fill: currentColor;
  }

  &:is(:hover, :focus-visible) {
    color: #ffde00;
  }
`;

export const Copyright = styled.p`
  font-size: 12px;

  text-align: center;
`;
