import React from 'react';
import styled from 'styled-components';
import {BPT, semibold, h2l, bodyMd, primaryHover, primaryLt, white} from '../../components/design';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import {hex2rgba, getStyle} from '../../utils/helpers';

const Wr = styled.div`
  width: 100%;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &::before {
    content: 'My skills (in Projects)';
    text-transform: uppercase;
    text-align: center;
    ${h2l};
    ${semibold};
    color: ${props => props.theme.title};
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
    color: ${props => props.theme.title};
    text-transform: uppercase;
    text-align: center;
  }
  @media ${BPT.md} {
    width: calc(50% - 30px);
  } ;
`;
const Percent = styled.span`
  margin-top: -15px;
  ${bodyMd};
  ${semibold};
  color: ${props => props.theme.title};
  text-transform: uppercase;
  text-align: center;
`;

export default function MySkills({values}) {
  if (!values.skills) return <></>;
  return (
    <Wr>
      <div>
        {Object.entries(values.skills).map(([key, value]) => (
          <Chart key={key}>
            <CircularProgressbarWithChildren
              value={Math.round((value / values.projects) * 100)}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathColor: hex2rgba(
                  getStyle(primaryHover),
                  Math.round((value / values.projects) * 100)
                ),
                textColor: white,
                trailColor: primaryLt,
                backgroundColor: 'none',
              })}>
              <Percent>{Math.round((value / values.projects) * 100)}%</Percent>
            </CircularProgressbarWithChildren>
            <p>{key}</p>
          </Chart>
        ))}
      </div>
    </Wr>
  );
}
