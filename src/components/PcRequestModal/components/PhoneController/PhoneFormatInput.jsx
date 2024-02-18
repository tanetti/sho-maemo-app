/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import InputMask from 'react-input-mask';

export const PhoneFormatInput = forwardRef((props, ref) => (
  <InputMask
    {...props}
    mask="+38 (999) 999-99-99"
    maskPlaceholder={null}
    ref={ref}
  />
));
