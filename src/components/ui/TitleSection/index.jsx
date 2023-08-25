import React from 'react';
import {styled} from 'styled-components';
import {BPT, h1l, megaTx, black, primaryHover, h1m, h1s} from '../../design';

const Wr = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 80px 0;
  text-align: center;
  @media ${BPT.sm} {
    text-align: left;
  }
  & h1 {
    ${h1l};
    color: ${(props) => props.theme.title};
    text-transform: uppercase;
    margin: 0;
    text-shadow: 0px 5px 7px rgba(0, 0, 0, 0.25);
    @media ${BPT.md} {
      ${h1m};
  }
    @media ${BPT.sm} {
      ${h1s};
  }
  }
  & h1 > span {
    color: ${primaryHover};
  }
  > span {
    ${megaTx};
    ${black};
    left: 0;
    letter-spacing: 10px;
    position: absolute;
    right: 0;
    top: 50%;
    text-transform: uppercase;
    transform: translateY(-50%);
    color: ${(props) => props.theme.title};
    opacity: 0.1;
    filter: blur(2px);
    @media ${BPT.md} {
      ${h1l};
      left: 20px;
      top: 65%;
  }
  }
`;

export default function TitleSection({title, secondTitle, subtitle}) {
  return (
    <Wr>
      <h1>{title}<span>{secondTitle}</span></h1>
      <span>{subtitle}</span>
    </Wr>
  );
}
