import React from 'react';
import { Group, FormInputLabel, InputForm } from './form-input.styles.jsx';

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      {label && (
        <FormInputLabel $shrink={otherProps.value.length > 0}>
          {label}
        </FormInputLabel>
      )}
      <InputForm {...otherProps} />
    </Group>
  );
};
