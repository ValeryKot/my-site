import React from 'react';
import styled from 'styled-components';
import TitleSection from '../../components/ui/TitleSection';
import {BPT, semibold, h2l} from '../../components/design';
import ExperienceItem from '../../components/ExperienceItem';
import { EXPERIENCE, EDUCATION } from '../../utils/static';

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
`;
const ItemsWr = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media ${BPT.lg} {
  flex-wrap: wrap;
  }
`;
const ItemsCol = styled.div`
  width: 49%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  @media ${BPT.lg} {
  width: 100%;
  }
`;

function Resume() {
  return (
    <Wr>
      <TitleSection title='Resu' secondTitle='Me' subtitle='history' />
      <Container>
        <Box>
          SUMMARY
          <ItemsWr>
            <ItemsCol>
              {EXPERIENCE.map((exp) => (
                <ExperienceItem key={exp.time} {...exp} />
              ))}
            </ItemsCol>
            <ItemsCol>
              {EDUCATION.map((exp) => (
                <ExperienceItem key={exp.time} {...exp} />
              ))}
            </ItemsCol>
          </ItemsWr>
        </Box>
      </Container>
    </Wr>
  );
}

export default Resume;
