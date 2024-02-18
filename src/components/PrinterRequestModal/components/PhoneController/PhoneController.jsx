import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { PhoneFormatInput } from './PhoneFormatInput';
import { RequestField } from '@/components/Shared';

export const PhoneController = ({ control, isDisabled }) => (
  <Controller
    name="phone"
    control={control}
    disabled={isDisabled}
    render={({ field, fieldState }) => (
      <RequestField
        field={field}
        fieldState={fieldState}
        label="Номер телефону"
        InputComponent={PhoneFormatInput}
        inputMode="tel"
      />
    )}
  />
);

PhoneController.propTypes = {
  control: PropTypes.object.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
