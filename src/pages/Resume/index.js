import React from 'react';
import styled from 'styled-components';
import TitleSection from '../../components/ui/TitleSection';
import {
  BPT,
  semibold,
  h2l,
  bodyMd,
  primaryHover,
} from '../../components/design';
import ExperienceItem from '../../components/ExperienceItem';
import {SUMMARY, EXPERIENCE, EDUCATION} from '../../utils/static';

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
  @media ${BPT.lg} {
    padding: 0 24px;
  }
  @media ${BPT.md} {
    padding: 0 16px;
  } ;
`;

const SummaryWr = styled.div`
  padding-bottom: 24px;
  width: 50%;
  margin: 0 auto;
  & p {
    position: relative;
    color: ${props => props.theme.title};
    ${bodyMd};
    margin-bottom: 12px;
    margin-left: 8px;
  }
  & p::before {
    content: '';
    position: absolute;
    top: 8px;
    left: -16px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${primaryHover};
  }
  @media ${BPT.lg} {
    width: 80%;
  }
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
    color: ${props => props.theme.title};
  }
  @media ${BPT.lg} {
    width: 100%;
    &::before {
      content: '';
    }
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
  &::before {
    content: '';
    text-transform: uppercase;
    text-align: center;
    ${h2l};
    ${semibold};
    color: ${props => props.theme.title};
    margin-bottom: 16px;
  }
  @media ${BPT.lg} {
    width: 100%;
    &:first-child::before {
      content: 'Experience';
    }
    &:last-child::before {
      content: 'Education';
    }
  }
`;

function Resume() {
  return (
    <Wr>
      <Container>
        <TitleSection title="Resu" secondTitle="Me" subtitle="history" />
        <SummaryWr>
          {SUMMARY.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </SummaryWr>
        <Box>
          <ItemsWr>
            <ItemsCol>
              {EXPERIENCE.map(exp => (
                <ExperienceItem key={exp.time} {...exp} />
              ))}
            </ItemsCol>
            <ItemsCol>
              {EDUCATION.map(exp => (
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
