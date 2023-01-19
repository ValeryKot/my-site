import React from 'react';
import styled from 'styled-components';
import {primaryHover, white, bodyMd} from '../../../design';

const Wr = styled.div`
  width: fit-content;
  height: 50px;
  position: relative;
  border-radius: 25px;
  border: 1px solid ${primaryHover};
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &::before {
    content: '';
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0;
    border-radius: 25px;
    background-color: ${primaryHover};
  }
  & h2 {
    opacity: 1;
    right: 0px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${(props) => props.theme.title};
    ${bodyMd};
    background-color: none;
    border-radius: 25px 0 0 25px;
    border-radius: 25px;
    text-transform: uppercase;
    white-space: nowrap;
    padding: 0 60px 0 25px;
    height: 50px;
  }
  &:hover {
    background-color: ${primaryHover};
    transition: all 0.5s ease-out;
  }
  & img {
    position: absolute;
    right: 8px;
    top: 8px;
  }
  & a {
    width: auto;
    height: auto;
    outline: none;
    text-decoration: none;
  }
`;

export default function ActionButton({
  title,
  icon,
  isActive,
  setPage,
  value,
  link = '',
}) {
  return (
    <Wr isActive={isActive} onClick={() => setPage(value)}>
      {link ? (
        <a href={link} target='_blank' rel='noreferrer'>
          <h2>{title}</h2>
          <img src={icon} alt={title} />
        </a>
      ) : (
        <>
          <h2>{title}</h2>
          <img src={icon} alt={title} />
        </>
      )}
    </Wr>
  );
}
