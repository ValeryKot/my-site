import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import Collapse from 'react-collapse';
import {primaryHover, white, caption, semibold, h2s, bodyMd, bodyLg} from '../design';
import exp_icon from '../../images/icons/resume.svg';
import arrow from '../../images/icons/arrow_down.svg';

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
    ${bodyLg};
    ${semibold};
    opacity: 0.7;
    padding-left: 26px;
    position: relative;
    white-space: nowrap;
  }
  & span::before {
    position: absolute;
    content: '';
    width: 10px;
    height: 2px;
    background-color: ${(props) => props.theme.title};
    left: 9px;
    top: 12px;
  }
`;

const TextBox = styled.div`
  color: ${(props) => props.theme.title};
  ${bodyMd};
  /* ul {
    margin-left: 20px;
    margin-top: 10px;
  } */
  li {
    padding: 10px 0;
    margin-left: 30px;
  }
`;

const FaqHead = styled.div`
  width: fit-content;
  display: block;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin: 10px 0;
  padding: 4px 48px 4px 24px;
  background: ${(props) => props.theme.subtitle};
  opacity: 0.8;
  ${(props) =>
    props.isOpened &&
    css`
      opacity: 1;
    `};
  border-radius: 8px;
  cursor: pointer;
  &+.ReactCollapse--collapse {
      transition: height 700ms cubic-bezier(0.4, 0.5, 0.3, 0.7);
    }
  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    right: 24px;
    top: calc(50% - 9px);
    fill: ${(props) => props.theme.subtitle};
    background-image: url(${arrow});
    background-size: cover;
    transition: transform 0.5s;
    ${(props) =>
      props.isOpened &&
      css`
        transform: rotate(180deg);
      `};
  }
`;

export default function ExperienceItem({
  time,
  position,
  company,
  summary,
  skills = [],
  open = false,
}) {
  const [isOpened, setIsOpened] = useState(open);

  const toggle = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    setIsOpened(!isOpened);
  }


  return (
    <Wr>
      <Icon>
        <img src={exp_icon} alt='icon' />
      </Icon>
      <TimeBox>{time}</TimeBox>
      <TitleBox>
        {position}
        <span>{company}</span>
      </TitleBox>
      <TextBox>
        {summary}
        {skills.length > 0 && (
          <>
            <FaqHead isOpened={isOpened} onClick={(e) => toggle(e)}>
              My skills
            </FaqHead>
            <Collapse  isOpened={isOpened}>
              <ul>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Collapse>
          </>
        )}
      </TextBox>
    </Wr>
  );
}
