import React from 'react';
import styled from 'styled-components';
import {PROJECTS_DATA as data} from '../../utils/static';
import ProjectsFilter from '../../components/ProjectsFilter';
import TitleSection from '../../components/ui/TitleSection';
import {BPT} from '../../components/design';
import Layout from '../../components/Layout';

const Wr = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.body};
  padding-bottom: 95px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  @media ${BPT.lg} {
    padding: 0 24px;
  }
  @media ${BPT.md} {
    padding: 0 16px;
  } ;
`;

function Projects() {
  return (
    <Layout>
      <Wr>
        <Container>
          <TitleSection title="My " secondTitle="portfolio" subtitle="works" />
          <ProjectsFilter data={data} />
        </Container>
      </Wr>
    </Layout>
  );
}

export default Projects;
