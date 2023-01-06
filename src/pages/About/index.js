import React from 'react';
import styled from 'styled-components';
import MyInfo from '../../components/MyInfo';
import StatsBox from '../../components/StatsBox';
import TitleSection from '../../components/ui/TitleSection';

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
const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;


function About() {
  return (
    <Wr>
      <Container>
        <TitleSection title='About ' secondTitle='Me' subtitle='resume' />
        <InfoContainer>
          <MyInfo/>
          <StatsBox/>
        </InfoContainer>
      </Container>
    </Wr>
  );
}

export default About;