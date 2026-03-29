import { FormInputLabel, Input, Group, FieldError } from './form-input.style';

const FormInput = ({ label, error, ...otherProps }) => {
  return (
    <Group $hasError={!!error}>
      <Input {...otherProps} $hasError={!!error} />
      {label && (
        <FormInputLabel
          shrink={(otherProps.value ?? '').length}
          $error={!!error}
        >
          {label}
        </FormInputLabel>
      )}
      {error ? <FieldError role="alert">{error}</FieldError> : null}
    </Group>
  );
};

export default FormInput;
