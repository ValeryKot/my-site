import React from 'react';
import styled from 'styled-components';
import {primaryHover, white} from '../design';
import exp_icon from '../../images/icons/resume.svg'

const Wr = styled.div`
  position: relative;
  padding: 0 20px 0 60px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    bottom: 0;
    border-left: 1px solid ${(props) => props.theme.subtitle};
  }
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${primaryHover};
  & img {
    color: ${white};
    scale: 0.8;
  }
`;

export default function ExperienceItem() {
  return (
    <Wr>
      <Icon>
        <img src={exp_icon} alt='icon' />
      </Icon>
      <p>ExperienceItem sdvsvsvsdvsddssdv  sdsd sdv</p>
      <span>ExperienceItem</span>
      <p>ExperienceItem</p>
    </Wr>
  );
}
