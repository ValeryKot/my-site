import React from 'react';
import styled from 'styled-components';
import { CATEGORIES } from '../../../utils/static';
import {BPT} from '../../design';
import {MenuButton} from '../Button';

const Wr = styled.nav`
  width: 50px;
  height: fit-content;
  position: fixed;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  z-index: 2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  @media ${BPT.lg} {
    left: 0;
    right: auto;
    bottom: 0;
    top: auto;
    transform: none;
    width: 100%;
    border-radius: 0;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 8px;
    z-index: 10;
    background: ${(props) => props.theme.lights};
  }
`;


function Nav({page, setPage}) {

  return (
    <Wr>
      {CATEGORIES.map((btn) => (
        <MenuButton key={btn.title} title={btn.title} icon={btn.icon} isActive={btn.value === page} setPage={setPage} value={btn.value} />
      ))}
    </Wr>
  )
}

export default Nav