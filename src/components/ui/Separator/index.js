import React from 'react';
import styled from 'styled-components';

const SeparatorLine = styled.hr`
  border: 0;
  border-top: 1px solid ${(props) => props.theme.subtitle};
  margin: 60px auto;
  max-width: 40%;
  opacity: 0.45;
`;


export const Separator = () => {
  return (
    <SeparatorLine/>
  )
}
