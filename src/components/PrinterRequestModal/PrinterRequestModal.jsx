import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import { useRequest } from '@/hooks';
import { Modal } from '@/components/Shared';
import { TRANSITION_STANDART_DURATION_MS } from '@/constants';
// import { validationSchema } from './utilities';

export const PrinterRequestModal = ({ isOpened, closeModal }) => {
  const {
    // control,
    reset,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    // resolver: yupResolver(validationSchema),
    // defaultValues: {
    //   section: null,
    //   name: '',
    //   surename: '',
    //   phone: '',
    //   weight: null,
    //   height: null,
    //   birthdate: null,
    //   medical: false,
    // },
  });

  const { sendRequest, isPending, isSuccess, isError } = useRequest(isOpened);

  const onSubmit = formData => {
    sendRequest(formData);
  };

  useEffect(() => {
    if (isOpened) return;

    const clearForm = setTimeout(reset, TRANSITION_STANDART_DURATION_MS);

    return () => clearTimeout(clearForm);
  }, [isOpened, reset]);

  return (
    <Modal
      isOpened={isOpened}
      closeModal={closeModal}
      idControls="request_modal"
      isControlsDisabled={isPending}
      isLoading={isPending}
      loadingCaption="Відправляємо..."
      isSuccess={isSuccess}
      successCaption="Готово!"
      successDescription="Дякуємо, ми зв'яжемося з Вами найближчим часом."
      isError={isError}
      errorCaption="Біда та й годі!"
      errorDescription="Щось пішло не за планом, будь ласка, спробуйте ще раз пізніше."
      title="Реєстрація"
    >
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </form>
    </Modal>
  );
};

PrinterRequestModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
