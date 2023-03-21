import React from 'react';
import styled, {keyframes} from 'styled-components';
import {primaryHover} from '../../design';

const dualRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wr = styled.div`
  display: flex;
  flex-basis: 1;
  grid-column: 1/-1;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  &::after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${primaryHover};
    border-color: ${primaryHover} transparent ${primaryHover} transparent;
    animation: ${dualRing} 1.2s linear infinite;
  }
`;

export default function Loader() {
  return <Wr/>;
}
