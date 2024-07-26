import { FC, InputHTMLAttributes } from 'react';

import { Group, FormInputLabel, InputForm } from './form-input.styles';

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

export const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      {label && (
        <FormInputLabel
          $shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === 'string' &&
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
      <InputForm {...otherProps} />
    </Group>
  );
};
