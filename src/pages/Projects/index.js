import React from 'react';
import styled from 'styled-components';
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

function Projects() {
  return (
    <Wr>
      <TitleSection title='My ' secondTitle='portfolio' subtitle='works' />
      <Container>Projects</Container>
    </Wr>
  );
}

export default Projects;
