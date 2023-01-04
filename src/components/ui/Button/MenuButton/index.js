import React from 'react';
import styled from 'styled-components';
import {primaryHover, white, bodyMd} from '../../../design';

const Wr = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isActive ? primaryHover : props.theme.subtitle};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & h2 {
    opacity: 0;
  }
  &:hover {
    background-color: ${primaryHover};
  }
  &:hover h2 {
    opacity: 1;
    right: 0px;
    z-index: -1;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${white};
    ${bodyMd};
    background-color: ${primaryHover};
    border-radius: 25px 0 0 25px;
    transition: all 0.35s;
    border-radius: 30px;
    text-transform: uppercase;
    white-space: nowrap;
    padding: 0 55px 0 30px;
    height: 50px;
  }
  & img {
    position: absolute;
  }
`;

export default function MenuButton({title, icon, isActive, setPage, value}) {
  return (
    <Wr isActive={isActive} onClick={() => setPage(value)}>
      <img src={icon} alt={title} />
      <h2>{title}</h2>
    </Wr>
  );
}
