import { ContainedButton } from '../Shared';
import {
  CaptionContainer,
  CaptionTitle,
  ImageContainer,
  SectionContainer,
} from './PcSection.styled';

export const PcSection = () => (
  <SectionContainer>
    <ImageContainer />

    <CaptionContainer>
      <CaptionTitle>
        Ремонт, продаж і налаштування
        <br />
        <span>комп’ютерів та ноутбуків</span>
      </CaptionTitle>

      <ContainedButton type="button">Консультація</ContainedButton>
    </CaptionContainer>
  </SectionContainer>
);
