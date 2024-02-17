import {
  DescriptionContainer,
  HeadContainer,
  ImageContainer,
  RequestContainer,
  SectionContainer,
} from './PrinterSection.styled';

export const PrinterSection = () => (
  <SectionContainer>
    <HeadContainer>
      <ImageContainer />

      <DescriptionContainer>
        Заправка та обслуговування
        <br />
        принтерів <span>Canon / HP</span>
      </DescriptionContainer>
    </HeadContainer>

    <RequestContainer></RequestContainer>
  </SectionContainer>
);
