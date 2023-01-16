import React from 'react';
import styled, {css} from 'styled-components';
import { bodyLg, bodyMd, primaryHover, secondary, semibold } from '../design';

const Wr = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  ${(props) =>
    props.error &&
    css`
      border: 1px solid ${primaryHover};
      padding: 10px;
      border-radius: 20px;
    `}
`;
const InputContainer = styled.div`
  position: relative;
  & textarea {
    width: 100%;
    background: ${(props) => props.theme.gradientMid};
    color: ${(props) => props.theme.title};
    border: 1px solid ${secondary};
    ${bodyLg};
    padding: 8px 23px;
    border-radius: 30px;
    outline: 0 !important;
    outline-offset: 0;
    transition: 0.3s;
    min-height: 160px;
    resize: vertical;
  }
  & textarea:focus {
    border: 1px solid ${primaryHover};
  }
  & label {
    display: block;
    position: absolute;
    left: 23px;
    top: 13px;
    ${bodyMd};
    color: ${(props) => props.theme.title};
    opacity: 0.8;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    touch-action: none;
    text-transform: uppercase;
    /* z-index: -1; */
  }
  textarea:valid + label,
  textarea:focus + label,
  textarea:disabled + label {
    top: -4px;
    left: 23px;
    font-size: 10px;
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


export default function InputArea({
  value,
  onChange = () => {},
  title = '',
  type = 'text',
  error = '',
  ...props
}) {

  return (
    <Wr error={error}>
      <InputContainer>
        <textarea
          value={value}
          onChange={onChange}
          type={type}
          required
          {...props}
        />
        <label>
          {title}
        </label>
      </InputContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wr>
  );
}
