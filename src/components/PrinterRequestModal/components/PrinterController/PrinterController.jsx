import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { RequestField } from '@/components/Shared';

export const PrinterController = ({ control, isDisabled }) => (
  <Controller
    name="printer"
    control={control}
    disabled={isDisabled}
    render={({ field, fieldState }) => (
      <RequestField
        field={field}
        fieldState={fieldState}
        label="Модель принтера"
      />
    )}
  />
);

PrinterController.propTypes = {
  control: PropTypes.object.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
