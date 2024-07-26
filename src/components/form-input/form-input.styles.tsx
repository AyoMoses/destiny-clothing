import styled, { css } from 'styled-components';
import { theme } from '../../theme';

type FormInputLableProps = {
  $shrink?: boolean;
};

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${theme.colors.mainCol};
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const InputForm = styled.input`
  background: none;
  background-color: white;
  color: ${theme.colors.subCol};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${theme.colors.subCol};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ .form-input-label {
    ${shrinkLabel}
  }

  &[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputLabel = styled.label<FormInputLableProps>`
  color: ${theme.colors.subCol};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ $shrink }) => $shrink && shrinkLabel}
`;
