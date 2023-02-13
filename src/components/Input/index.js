import React from 'react';
import styled, {css} from 'styled-components';
import {
  bodyLg,
  bodyMd,
  primaryHover,
  secondaryLt,
  semibold,
} from '../design';

const Wr = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  ${(props) =>
    props.error &&
    css`
      height: auto;
      border: 1px solid ${primaryHover};
      padding: 10px;
      border-radius: 20px;
    `}
`;
const InputContainer = styled.div`
  position: relative;
  & input {
    width: 100%;
    background: ${(props) => props.theme.gradientMid};
    border: 1px solid ${secondaryLt};
    color: ${(props) => props.theme.title};
    ${bodyLg};
    padding: 8px 23px;
    border-radius: 35px;
    outline: 0 !important;
    outline-offset: 0;
    transition: 0.3s;
  }
  /* & input:-internal-autofill-selected {
  background-color: ${(props) => props.theme.gradientMid} !important;
    border: 1px solid ${secondaryLt} !important;
    color: ${(props) => props.theme.title} !important;
    appearance: inherit;
} */
  & input:focus {
    border: 1px solid ${primaryHover};
  }
  & label {
    display: block;
    position: absolute;
    left: 23px;
    top: 13px;
    ${bodyMd};
    color: ${(props) => props.theme.title};
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    touch-action: none;
    text-transform: uppercase;
  }
  input:valid + label,
  input:focus + label,
  input:disabled + label {
    top: -4px;
    left: 23px;
    font-size: 10px;
  }
  /* Remove AUTOFILL styles */
  input:-webkit-autofill::first-line {
    color: ${(props) => props.theme.title};
  }
  input:-webkit-autofill {
    /* Expose a hook for JavaScript when auto fill is shown. */
    /* JavaScript can capture 'animationstart' events */
    animation-name: onAutoFillStart;

    /* Delay the autofill background color from appearing */
    transition: background-color 0s 86400s;
    color: ${(props) => props.theme.title};
  }

  input:not(:-webkit-autofill) {
    /* Expose a hook for JS onAutoFillCancel */
    /* JavaScript can capture 'animationstart' events */
    animation-name: onAutoFillCancel;
  }
`;

const ErrorMessage = styled.div`
  color: ${primaryHover};
  margin-left: 5px;
  margin-top: 4px;
  ${bodyMd};
  ${semibold};
  white-space: normal;
`;

const Star = styled.span`
  color: ${primaryHover};
  margin-left: 5px;
  opacity: 1;
`;

export default function Input({
  value,
  onChange = () => {},
  onBlur = () => {},
  title = '',
  required = false,
  type = 'text',
  error = '',
  ...props
}) {
  const star = !required ? '' : '*';

  return (
    <Wr error={error}>
      <InputContainer>
        <input
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          required
          {...props}
        />
        <label>
          {title}
          {required && <Star>{star}</Star>}
        </label>
      </InputContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wr>
  );
}
