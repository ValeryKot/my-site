import React from 'react';
import styled from 'styled-components';
import {primaryHover, white, caption, semibold, h2s, bodyMd} from '../design';
import exp_icon from '../../images/icons/resume.svg';

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

const TimeBox = styled.span`
  color: ${(props) => props.theme.gradientMid};
  ${caption};
  ${semibold};
  width: fit-content;
  text-transform: uppercase;
  padding: 1px 10px;
  display: inline-block;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.title};
  opacity: 0.7;
`;

const TitleBox = styled.p`
  color: ${(props) => props.theme.title};
  ${h2s};
  ${semibold};
  text-transform: uppercase;
  margin-bottom: 10px;
  span {
    color: ${(props) => props.theme.title};
    ${h2s};
    ${semibold};
    opacity: 0.7;
    padding-left: 26px;
    position: relative;
  }
  & span::before {
    position: absolute;
    content: '';
    width: 10px;
    height: 2px;
    background-color: ${(props) => props.theme.title};
    left: 7px;
    top: 13px;
  }
`;

const TextBox = styled.div`
  color: ${(props) => props.theme.title};
  ${bodyMd};
  ul {
    margin-left: 20px;
    margin-top: 10px;
  }
`;

export default function ExperienceItem({time, position, company, summary, skills=[]}) {
  return (
    <Wr>
      <Icon>
        <img src={exp_icon} alt='icon' />
      </Icon>
      <TimeBox>{time}</TimeBox>
      <TitleBox>
        {position}<span>{company}</span>
      </TitleBox>
      <TextBox>{summary}
      <ul>
        {skills.length > 0 && skills.map((skill) =>
          <li key={skill}>{skill}</li>
        )}
        </ul>
      </TextBox>
    </Wr>
  );
}
