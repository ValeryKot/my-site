import React, {useState, useLayoutEffect} from 'react';
import {styled} from 'styled-components';
import MyInfo from '../../components/MyInfo';
import MySkills from '../../components/MySkills';
import StatsBox from '../../components/StatsBox';
import TitleSection from '../../components/ui/TitleSection';
import {Separator} from '../../components/ui/Separator';
import {BPT} from '../../components/design';
import {PROJECTS_DATA} from '../../utils/static';
import TechSkills from '../../components/TechSkills';
import Layout from '../../components/Layout';

const Wr = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.body};
`;

const Container = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  @media ${BPT.xl} {
    padding: 0 24px;
  }
  @media ${BPT.md} {
    padding: 0 16px;
  } ;
`;
const InfoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  @media ${BPT.lg} {
    grid-template-columns: 1fr;
    gap: 32px;
  } ;
`;

function About() {
  const [values, setValues] = useState({});

  useLayoutEffect(() => {
    const skills = [];
    const libs = [];
    let customers = [];
    let projects = 0;
    const sortSkills = {};

    PROJECTS_DATA.forEach(item => {
      if (item.category === 'projects') {
        skills.push(...item.technology);
        libs.push(...item.libraries);
        customers.push(item.client);
        projects += 1;
      }
    });
    skills.forEach(item => {
      sortSkills[item] = sortSkills[item] ? sortSkills[item] + 1 : 1;
    });
    const lib = libs.reduce((acc, el) => {
      if (acc.includes(el)) return acc;
      return [...acc, el];
    }, []);
    const clients = customers.reduce((acc, el) => {
      if (acc.includes(el)) return acc;
      return [...acc, el];
    }, []);
    const result = {
      skills: sortSkills,
      libs: lib,
      projects: projects,
      clients: clients,
    };
    setValues(result);
  }, []);

  return (
    <Layout>
      <Wr>
        <Container>
          <TitleSection title="About " secondTitle="Me" subtitle="resume" />
          <InfoContainer>
            <MyInfo />
            <StatsBox values={values} />
          </InfoContainer>
          <Separator />
          <MySkills values={values} />
          <Separator />
          <TechSkills values={values} />
        </Container>
      </Wr>
    </Layout>
  );
}

export default About;
