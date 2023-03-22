import React from 'react';
import styled from 'styled-components';
import sun_icon from '../../../../images/icons/sun.svg';
import moon_icon from '../../../../images/icons/moon.svg';

const Wr = styled.div`
  width: 50px;
  height: 50px;
  z-index: 99;
  position: fixed;
  top: 30px;
  right: 30px;
  border-radius: 50%;
  background-color: ${props => props.theme.subtitle};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    filter: brightness(130%);
  }
  & img {
    position: absolute;
  }
`;

function ThemeButton({toggleTheme, isDarkTheme}) {
  return (
    <Wr onClick={toggleTheme}>
      <img src={isDarkTheme ? moon_icon : sun_icon} alt="icon" />
    </Wr>
  );
}

export default React.memo(ThemeButton);
