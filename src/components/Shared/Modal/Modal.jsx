import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { SpriteIcon } from '@/components/Shared';
import {
  Backdrop,
  BackgroundContainer,
  BottomGradient,
  CloseButton,
  CloseOutlineButton,
  ContentContainer,
  ErrorContainer,
  Loader,
  LoadingContainer,
  SuccessContainer,
  Title,
  Window,
} from './Modal.styled';

const portalElement = document.getElementById('portal');
const bodyElement = document.getElementsByTagName('body')[0];

export const Modal = ({
  isOpened,
  closeModal,
  idControls,
  isControlsDisabled,
  isLoading,
  loadingCaption,
  isSuccess,
  successCaption,
  successDescription,
  isError,
  errorCaption,
  errorDescription,
  title,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isBackdropBlocked, setIsBackdropBlocked] = useState(false);

  const onBackdropClick = () => {
    if (isControlsDisabled) return;

    if (isBackdropBlocked) return setIsBackdropBlocked(false);

    closeModal();
    setIsBackdropBlocked(false);
  };

  const onCloseClick = () => {
    if (isControlsDisabled) return;

    closeModal();
  };

  useEffect(() => {
    if (!isOpened) {
      setIsVisible(false);

      bodyElement.classList.remove('modal');

      setTimeout(() => {
        setIsRendered(false);
        closeModal();
      }, 600);

      return;
    }

    bodyElement.classList.add('modal');
    setIsRendered(true);

    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, [closeModal, isOpened]);

  useEffect(() => {
    if (!isRendered) return;

    const focusableElements = portalElement.querySelectorAll(
      'button:not(:disabled), [href], iframe, input:not(:disabled), select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKeyPress = event => {
      if (isControlsDisabled) return;

      if (event.key !== 'Tab') return;

      const focusable = Array.from(focusableElements);
      const activeElementIndex = focusable.findIndex(
        element => element === document.activeElement
      );

      if (activeElementIndex === -1) {
        event.preventDefault();

        firstElement && firstElement.focus();
      } else {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();

          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();

          firstElement.focus();
        }
      }
    };

    const handleEscapeKeyPress = event => {
      if (isControlsDisabled) return;

      if (event.key !== 'Escape') return;

      closeModal();
    };

    window.addEventListener('keydown', handleTabKeyPress);
    window.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      window.removeEventListener('keydown', handleTabKeyPress);
      window.removeEventListener('keydown', handleEscapeKeyPress);
    };
  }, [
    closeModal,
    isRendered,
    isControlsDisabled,
    isLoading,
    isSuccess,
    isError,
  ]);

  if (isRendered)
    return createPortal(
      <Backdrop isVisible={isVisible} onClick={onBackdropClick}>
        <Window
          id={idControls}
          role="dialog"
          aria-modal="true"
          isVisible={isVisible}
          onClick={event => event.stopPropagation()}
          onMouseDownCapture={() => setIsBackdropBlocked(true)}
          onMouseUpCapture={() => setIsBackdropBlocked(false)}
        >
          <ContentContainer>
            <Title>{title}</Title>

            {children}
          </ContentContainer>

          <BackgroundContainer />

          <BottomGradient />

          <CloseButton
            type="button"
            aria-label="Закрити вікно"
            onClick={onCloseClick}
          >
            <SpriteIcon symbol="close" />
          </CloseButton>

          {isLoading !== undefined ? (
            <>
              <LoadingContainer visible={isLoading} aria-hidden={!isLoading}>
                <Loader />

                {loadingCaption ? <span>Відправляємо...</span> : null}
              </LoadingContainer>

              {isSuccess !== undefined ? (
                <SuccessContainer visible={isSuccess} aria-hidden={!isSuccess}>
                  <SpriteIcon symbol="check" />

                  <em>{successCaption ? successCaption : 'Успіх'}</em>

                  {successDescription ? (
                    <span>{successDescription}</span>
                  ) : null}

                  <CloseOutlineButton type="button" onClick={onCloseClick}>
                    Закрити
                  </CloseOutlineButton>
                </SuccessContainer>
              ) : null}

              {isError !== undefined ? (
                <ErrorContainer visible={isError} aria-hidden={!isError}>
                  <SpriteIcon symbol="error" />

                  <em>{errorCaption ? errorCaption : 'Помилка'}</em>

                  {errorDescription ? <span>{errorDescription}</span> : null}

                  <CloseOutlineButton type="button" onClick={onCloseClick}>
                    Закрити
                  </CloseOutlineButton>
                </ErrorContainer>
              ) : null}
            </>
          ) : null}
        </Window>
      </Backdrop>,

      portalElement
    );
};

Modal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  idControls: PropTypes.string,
  isControlsDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingCaption: PropTypes.string,
  isSuccess: PropTypes.bool,
  successCaption: PropTypes.string,
  successDescription: PropTypes.string,
  isError: PropTypes.bool,
  errorCaption: PropTypes.string,
  errorDescription: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
