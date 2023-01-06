import React from 'react';
import styled from 'styled-components';
import {semibold, h2l, bodyMd, primaryHover, primaryLt, white} from '../../components/design';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Wr = styled.div`
  width: 100%;
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
  width: 25%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    margin-top: 15px;
    ${bodyMd};
    ${semibold};
    color: ${(props) => props.theme.title};
    text-transform: uppercase;
    text-align: center;
  }
`;

const percentage = 66;

export default function MySkills() {
  return (
    <Wr>
      <div>
        <Chart>
        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
    strokeLinecap: 'butt',

    // Text size
    textSize: '10px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
    textColor: white,
    trailColor: primaryLt,
    backgroundColor: 'none',
  })}
/>
          <p>html</p>
        </Chart>
        <Chart>
          <p>I123</p>
          <p>I123</p>
        </Chart>
        <Chart>
          <p>I123</p>
          <p>I123</p>
        </Chart>
      </div>
    </Wr>
  );
}
