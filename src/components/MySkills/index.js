import React from 'react';
import styled from 'styled-components';
import {semibold, h2l, bodyMd, primaryHover, primaryLt, white} from '../../components/design';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import {hex2rgba, getStyle} from '../../utils/helpers';
import {SKILLS_DATA} from '../../utils/static';

const Wr = styled.div`
  width: 100%;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &::before {
    content: 'My skills';
    text-transform: uppercase;
    text-align: center;
    ${h2l};
    ${semibold};
    color: ${(props) => props.theme.title};
  }
  > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
`;
const Chart = styled.div`
  width: calc(25% - 30px);
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & svg {
    width: 7rem;
    height: 7rem;
  }
  & p {
    margin-top: 15px;
    ${bodyMd};
    ${semibold};
    color: ${(props) => props.theme.title};
    text-transform: uppercase;
    text-align: center;
  }
`;
const Percent = styled.span`
  margin-top: -15px;
  ${bodyMd};
  ${semibold};
  color: ${(props) => props.theme.title};
  text-transform: uppercase;
  text-align: center;
`;


export default function MySkills() {
  return (
    <Wr>
      <div>
        {SKILLS_DATA.map((skill) => (
          <Chart key={skill.title}>
            <CircularProgressbarWithChildren
              value={skill.value}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathColor: hex2rgba(getStyle(primaryHover), skill.value),
                textColor: white,
                trailColor: primaryLt,
                backgroundColor: 'none',
              })}
            >
              <Percent>{skill.value}%</Percent>
            </CircularProgressbarWithChildren>
            <p>{skill.title}</p>
          </Chart>
        ))}
      </div>
    </Wr>
  );
}
