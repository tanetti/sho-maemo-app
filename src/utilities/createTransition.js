import {
  TRANSITION_ANIMATION,
  TRANSITION_LONG_DURATION_MS,
  TRANSITION_STANDART_DURATION_MS,
  TRANSITION_SHORT_DURATION_MS,
} from '@/constants';

const getDelay = delay => {
  switch (delay) {
    case 'long':
      return `${TRANSITION_LONG_DURATION_MS}ms`;

    case 'standart':
      return `${TRANSITION_STANDART_DURATION_MS}ms`;

    case 'short':
      return `${TRANSITION_SHORT_DURATION_MS}ms`;

    default:
      return '';
  }
};

export const createTransition = (transitionProps, duration, delay) => {
  if (!transitionProps || !duration) return 'none';

  let props = null;

  if (typeof transitionProps === 'string') {
    props = [transitionProps];
  } else if (Array.isArray(transitionProps)) {
    props = transitionProps;
  }

  if (!props) return 'none';

  let result = '';

  switch (duration) {
    case 'long':
      props.forEach((prop, index) => {
        result =
          result +
          `${index !== 0 ? ' ,' : ''}
          ${prop} ${TRANSITION_LONG_DURATION_MS}ms ${TRANSITION_ANIMATION} ${
            delay ? getDelay(delay) : ''
          }`;
      });
      break;

    case 'standart':
      props.forEach((prop, index) => {
        result =
          result +
          `${index !== 0 ? ' ,' : ''}
          ${prop} ${TRANSITION_STANDART_DURATION_MS}ms ${TRANSITION_ANIMATION} ${
            delay ? getDelay(delay) : ''
          }`;
      });
      break;

    case 'short':
      props.forEach((prop, index) => {
        result =
          result +
          `${index !== 0 ? ' ,' : ''}
          ${prop} ${TRANSITION_SHORT_DURATION_MS}ms ${TRANSITION_ANIMATION} ${
            delay ? getDelay(delay) : ''
          }`;
      });
      break;

    default:
      return 'none';
  }

  return result;
};
