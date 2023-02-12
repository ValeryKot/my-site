import React from 'react';
import styled from 'styled-components';
import {BPT, bold, bodyMd, hl, primaryHover, primaryLt, regular} from '../design';
import {fromDate} from '../../utils/helpers';
import { STATS_DATA } from '../../utils/static';

const Wr = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  @media ${BPT.lg} {
    width: 100%;
    gap: 16px;
  }
`;

const Box = styled.div`
  width: calc(50% - 15px);
  min-width: fit-content;
  padding: 20px 5px 25px 40px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.subtitle};
  & h2 {
    ${hl};
    color: ${primaryHover};
    ${bold};
  }
  & h2 > span {
    display: inline-block;
    font-size: 33px;
    transform: translateY(-25%);
    ${regular}
  }
  & p {
    position: relative;
    padding-left: 40px;
    ${bodyMd};
    color: ${props => props.theme.title};
    text-transform: uppercase;
  }
  & p > span {
    display: block;
  }
  & p::before {
    content: '';
    position: absolute;
    left: 3px;
    top: 13px;
    width: 30px;
    height: 1px;
    background-color: ${primaryLt};
  }
  @media ${BPT.sm} {
    width: 100%;
  }
`;

export default function StatsBox({values}) {
  if (!values.projects) return <></>;
  console.log(values);
  return (
    <Wr>
      {STATS_DATA.map(stats => (
        <Box key={stats.title}>
          <h2>
            {stats.value === '999'
              ? fromDate()
              : stats.subtitle === 'projects'
              ? values.projects
              : stats.subtitle === 'customers'
              ? values.clients.length
              : stats.value}
            <span>{stats.plus}</span>
          </h2>
          <p>
            {stats.title} <span>{stats.subtitle}</span>
          </p>
        </Box>
      ))}
    </Wr>
  );
}
