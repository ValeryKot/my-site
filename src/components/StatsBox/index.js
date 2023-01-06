import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import {bold, bodyMd, hl, primaryHover, regular} from '../design';

const Wr = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
const Box = styled.div`
  width: calc(50% - 15px);
  padding: 20px 30px 25px 40px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.subtitle};
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
    ${bodyMd};
    color: ${(props) => props.theme.title};
    text-transform: uppercase;
  }
  & p > span {
    display: block;
  }
`;

const fromDate = () => {
  return moment('01.08.2022', 'DD/MM/YYYY')
    .fromNow(true)
    .replace(' months', '');
};

export default function StatsBox() {
  return (
    <Wr>
      <Box>
        <h2>
          {fromDate()}
          <span>+</span>
        </h2>
        <p>
          MONT’S OF <span>EXPERIENCE</span>
        </p>
      </Box>
      <Box>
        <h2>6+</h2>
        <p>StatsBox</p>
      </Box>
      <Box>
        <h2>6+</h2>
        <p>StatsBox</p>
      </Box>
    </Wr>
  );
}
