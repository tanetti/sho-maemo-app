import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { RequestTextArea } from './components';

export const InfoController = ({ control, isDisabled }) => (
  <Controller
    name="info"
    control={control}
    disabled={isDisabled}
    render={({ field, fieldState }) => (
      <RequestTextArea
        field={field}
        fieldState={fieldState}
        label="Додаткова інформація"
      />
    )}
  />
);

InfoController.propTypes = {
  control: PropTypes.object.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
