import PropTypes from 'prop-types';
import {
  Container,
  ErrorLabel,
  HintBage,
  Input,
  Label,
} from './RequestField.styled';

export const RequestField = ({
  field,
  fieldState,
  label,
  InputComponent,
  type = 'text',
  inputMode = 'text',
  hintBage,
  readOnly = false,
}) => {
  const { name } = field;
  const { error } = fieldState;

  return (
    <Container error={!!error}>
      <Input
        as={InputComponent ? InputComponent : null}
        id={`input-field-${name}`}
        type={type}
        placeholder=""
        {...field}
        inputMode={inputMode}
        autoComplete="off"
        readOnly={readOnly ? 'true' : null}
      />

      {label ? <Label htmlFor={`input-field-${name}`}>{label}</Label> : null}

      {hintBage ? <HintBage>{hintBage}</HintBage> : null}

      <ErrorLabel>{error?.message}</ErrorLabel>
    </Container>
  );
};

RequestField.propTypes = {
  field: PropTypes.object.isRequired,
  fieldState: PropTypes.object.isRequired,
  label: PropTypes.string,
  InputComponent: PropTypes.object,
  type: PropTypes.string,
  inputMode: PropTypes.string,
  hintBage: PropTypes.string,
  readOnly: PropTypes.bool,
};
