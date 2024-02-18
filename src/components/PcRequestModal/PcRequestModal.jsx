import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { usePcRequest } from '@/hooks';
import {
  ButtonsContainer,
  ContainedRequestButton,
  Modal,
  OutlinedRequestButton,
} from '@/components/Shared';
import { validationSchema } from './utilities';
import { TRANSITION_STANDART_DURATION_MS } from '@/constants';
import { NameController, PhoneController, InfoController } from './components';
import { FieldsContainer } from './PcRequestModal.styled';

export const PcRequestModal = ({ isOpened, closeModal }) => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      phone: '',
      info: '',
    },
  });

  const { sendRequest, isPending, isSuccess, isError } = usePcRequest(isOpened);

  const onSubmit = formData => sendRequest(formData);

  useEffect(() => {
    if (isOpened) return;

    const clearForm = setTimeout(reset, TRANSITION_STANDART_DURATION_MS);

    return () => clearTimeout(clearForm);
  }, [isOpened, reset]);

  const submitBlock = !!Object.keys(errors)?.length;
  const isDisabled = isPending || isSuccess || isError;

  return (
    <Modal
      isOpened={isOpened}
      closeModal={closeModal}
      idControls="pc_request_modal"
      isControlsDisabled={isPending}
      isLoading={isPending}
      loadingCaption="Відправляємо..."
      isSuccess={isSuccess}
      successCaption="Готово!"
      successDescription="Дякуємо, ми зв'яжемося з Вами найближчим часом."
      isError={isError}
      errorCaption="Біда та й годі!"
      errorDescription="Щось пішло не за планом, будь ласка, спробуйте ще раз пізніше."
      title="Зворотній зв'язок"
    >
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <legend className="visually_hidden">Заповніть дані</legend>

        <FieldsContainer>
          <NameController control={control} isDisabled={isDisabled} />

          <PhoneController control={control} isDisabled={isDisabled} />

          <InfoController control={control} isDisabled={isDisabled} />
        </FieldsContainer>

        <ButtonsContainer>
          <ContainedRequestButton
            type="submit"
            disabled={submitBlock || isDisabled}
          >
            Записатися
          </ContainedRequestButton>

          <OutlinedRequestButton type="button" onClick={closeModal}>
            Закрити
          </OutlinedRequestButton>
        </ButtonsContainer>
      </form>
    </Modal>
  );
};

PcRequestModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
