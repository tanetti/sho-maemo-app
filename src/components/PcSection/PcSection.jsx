import { useState } from 'react';
import { PcRequestModal } from '@/components';
import { ContainedButton } from '@/components/Shared';
import {
  CaptionContainer,
  CaptionTitle,
  ImageContainer,
  SectionContainer,
} from './PcSection.styled';

export const PcSection = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <SectionContainer>
      <ImageContainer />

      <CaptionContainer>
        <CaptionTitle>
          Ремонт, продаж і налаштування
          <br />
          <span>комп’ютерів та ноутбуків</span>
        </CaptionTitle>

        <ContainedButton
          type="button"
          aria-expanded={isModalOpened}
          aria-controls="pc_request_modal"
          aria-haspopup="dialog"
          onClick={() => setIsModalOpened(true)}
        >
          Консультація
        </ContainedButton>

        <PcRequestModal
          isOpened={isModalOpened}
          closeModal={() => setIsModalOpened(false)}
        />
      </CaptionContainer>
    </SectionContainer>
  );
};
