import React from 'react';
import styled from 'styled-components';
import {megaTx, black} from './design/Fonts';

const Title = styled.div`
  font-family: 'OpenSans';
  /* font-family: 'Poppins'; */
  ${megaTx}
  ${black};
  color: red;
`;

function TopTitle() {
  return <Title>TopTitle</Title>;
}

export default TopTitle;
