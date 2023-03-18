import React from 'react';
import styled, {css} from 'styled-components';
import {motion} from 'framer-motion';
import {bodyMd, primaryHover, semibold} from '../../design';

const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 6px 16px;
  border-radius: 4px;
  ${bodyMd};
  ${semibold};
  color: ${props => (props.isSelected ? primaryHover : props.theme.title)};
  text-transform: uppercase;
  text-align: center;
  position: relative;
  cursor: pointer;
  ${props =>
    props.isSelected &&
    css`
      &::after {
        content: '';
        position: absolute;
        bottom: 4px;
        left: 0;
        height: 3px;
        border-radius: 1px;
        width: 100%;
        margin: 0 auto;
        background-color: ${primaryHover};
      }
    `};
  
    /* @media (hover:hover) {
        color: ${primaryHover};
        background-color: ${props => props.theme.subtitle};
      } */
    &:hover:hover {
        color: ${primaryHover};
        background-color: ${props => props.theme.subtitle};
      }
  
`;

export const FilterButton = ({text, handleClick = () => {}, isSelected}) => {
  return (
    <Button
      isSelected={isSelected}
      as={motion.button}
      onClick={handleClick}>
      {text}
    </Button>
  );
};
