import React from 'react';
import styled from 'styled-components';
import {semibold, h2l, bodyMd, success} from '../../components/design';
import {PERSONAL_INFO} from '../../utils/static';

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
    color: ${(props) => props.theme.title};
  }
  & a {
    outline: none;
    text-decoration: none;
    color: ${(props) => props.theme.title};
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
    color: ${(props) => props.theme.title};
    ${bodyMd};
    ${semibold};
  }
  & li > span:first-child {
    opacity: 0.7;
    text-transform: capitalize;
  }
`;

export default function MyInfo() {
  return (
    <Wr>
      <ul>
        {PERSONAL_INFO.map((item) => (
          <li>
            <span>{item.title} </span>
            <span style={item.label && {color: `${success}`}}>
              {item.link ? (
                <a href={item.link} target='_blank' rel='noreferrer'>
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </span>
          </li>
        ))}
      </ul>
    </Wr>
  );
}
