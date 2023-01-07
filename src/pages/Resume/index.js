import React from 'react';
import styled from 'styled-components';
import TitleSection from '../../components/ui/TitleSection';
import {semibold, h2l, bodyMd, primaryHover, primaryLt, white} from '../../components/design';

const Wr = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
`;

const Box = styled.div`
  width: 100%;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &::before {
    content: 'Experience & Education';
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

function Resume() {
  return (
    <Wr>
      <TitleSection title='Resu' secondTitle='Me' subtitle='history' />
      <Container><Box>Resume</Box></Container>
    </Wr>
  );
}

export default Resume;
