import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { RequestField } from '@/components/Shared';

export const NameController = ({ control, isDisabled }) => (
  <Controller
    name="name"
    control={control}
    disabled={isDisabled}
    render={({ field, fieldState }) => (
      <RequestField field={field} fieldState={fieldState} label="Ваше і'мя" />
    )}
  />
);

NameController.propTypes = {
  control: PropTypes.object.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
