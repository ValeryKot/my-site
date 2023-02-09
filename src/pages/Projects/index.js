import React from 'react';
import styled from 'styled-components';
import {PROJECTS_DATA as data} from '../../utils/static';
import ProjectsFilter from '../../components/ProjectsFilter';
import TitleSection from '../../components/ui/TitleSection';

const Wr = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.body};
  padding-bottom: 95px;
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
      <Container>
      <ProjectsFilter data={data}/>
      </Container>
    </Wr>
  );
}

export default Projects;
