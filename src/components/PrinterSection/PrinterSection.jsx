import { ContainedButton } from '../Shared';
import {
  Caption,
  CaptionItem,
  CaptionList,
  CaptionTitle,
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
        <p>
          Заправка та обслуговування
          <br />
          принтерів <span>Canon / HP</span>
        </p>
      </DescriptionContainer>
    </HeadContainer>

    <RequestContainer>
      <Caption>
        <CaptionTitle>
          Топ <span>3 причини</span> звернутися до нас:
        </CaptionTitle>

        <CaptionList>
          <CaptionItem>
            Ваш принтер друкує <b>блідно</b>
          </CaptionItem>

          <CaptionItem>
            Ваш принтер залишає <span>смуги</span> на папері
          </CaptionItem>

          <CaptionItem>Ви не хочете в цьому розбиратись</CaptionItem>
        </CaptionList>
      </Caption>

      <ContainedButton type="button">Записатися</ContainedButton>
    </RequestContainer>
  </SectionContainer>
);
