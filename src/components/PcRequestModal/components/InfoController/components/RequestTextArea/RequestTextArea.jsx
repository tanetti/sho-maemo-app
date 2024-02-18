import PropTypes from 'prop-types';
import {
  Container,
  ErrorLabel,
  HintBage,
  TextArea,
  Label,
} from './RequestTextArea.styled';

export const RequestTextArea = ({
  field,
  fieldState,
  label,
  type = 'text',
  inputMode = 'text',
  hintBage,
  readOnly = false,
}) => {
  const { name } = field;
  const { error } = fieldState;

  return (
    <Container error={!!error}>
      <TextArea
        id={`input-field-${name}`}
        type={type}
        rows={5}
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

RequestTextArea.propTypes = {
  field: PropTypes.object.isRequired,
  fieldState: PropTypes.object.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  inputMode: PropTypes.string,
  hintBage: PropTypes.string,
  readOnly: PropTypes.bool,
};
