import { useState } from 'react';
import { PrinterRequestModal } from '@/components';
import { ContainedButton } from '@/components/Shared';
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

export const PrinterSection = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
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

        <ContainedButton
          type="button"
          aria-expanded={isModalOpened}
          aria-controls="printer_request_modal"
          aria-haspopup="dialog"
          onClick={() => setIsModalOpened(true)}
        >
          Записатися
        </ContainedButton>

        <PrinterRequestModal
          isOpened={isModalOpened}
          closeModal={() => setIsModalOpened(false)}
        />
      </RequestContainer>
    </SectionContainer>
  );
};
