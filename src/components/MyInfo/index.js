import React from 'react';
import styled from 'styled-components';
import {BPT, semibold, h2l, bodyMd, success} from '../../components/design';
import {PERSONAL_INFO} from '../../utils/static';
import { ActionButton } from '../ui/Button';
import dwn_icon from '../../images/icons/download.svg'

const Wr = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &::before {
    content: 'Personal infos';
    text-transform: uppercase;
    ${h2l};
    ${semibold};
    color: ${props => props.theme.title};
  }
  & a {
    outline: none;
    text-decoration: none;
    color: ${props => props.theme.title};
  }
  & ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }
  & li {
    flex: 0 0 50%;
    max-width: 50%;
    padding-bottom: 20px;
    color: ${props => props.theme.title};
    ${bodyMd};
    ${semibold};
    @media ${BPT.xs} {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  & li > span:first-child {
    opacity: 0.7;
    text-transform: capitalize;
  }
  & li > span:last-child {
    @media ${BPT.sm} {
      display: block;
    }
    @media ${BPT.xs} {
      display: inline-block;
    }
  }
  @media ${BPT.lg} {
    width: 100%;
  } ;
`;

const Avatar = styled.div`
  display: none;
  @media ${BPT.sm} {
    display: block;
    position: relative;
    background-image: image-set(
      url(${require('../../images/myPhoto.jpg')}) 1x,
      url(${require('../../images/myPhoto2x.jpg')}) 2x
    );
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(2px 2px 7px rgba(0, 0, 0, 0.8));
    border-radius: 50%;
    left: calc(50% - 110px);
    width: 220px;
    height: 220px;
    border: 3px solid ${props => props.theme.lights};
    background-size: 90%;
    margin-bottom: 16px;
  }
`;

export default function MyInfo() {
  return (
    <Wr>
      <Avatar />
      <ul>
        {PERSONAL_INFO.map(item => (
          <li key={item.title}>
            <span>{item.title} </span>
            <span style={item.label && {color: `${success}`}}>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </span>
          </li>
        ))}
      </ul>
      <ActionButton
        title="Download CV"
        icon={dwn_icon}
        link="http://localhost:3000/1230"
      />
    </Wr>
  );
}
