import React from 'react';
import styled from 'styled-components';
import {semibold, h2l, bodyMd} from '../../components/design';
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
const MyInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &::before {
    content: 'Personal infos';
    text-transform: uppercase;
    ${h2l};
    ${semibold};
    color: ${(props) => props.theme.title};
  }
  & ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }
  & li {
    flex: 0 0 50%;
    max-width: 50%;
    padding-bottom: 20px;
    color: ${(props) => props.theme.title};
    ${bodyMd};
    ${semibold};
  }
  & li > span:first-child {
    opacity: 0.7;
    text-transform: capitalize;
  }
`;

function About() {
  return (
    <Wr>
      <Container>
        <TitleSection title='About ' secondTitle='Me' subtitle='resume' />
        <InfoContainer>
          <MyInfo>
            <ul>
              <li>
                <span>First name: </span>
                <span>Valery</span>
              </li>
              <li>
                <span>Last name: </span>
                <span>Kot</span>
              </li>
              <li>
                <span>Age: </span>
                <span>45 Years</span>
              </li>
              <li>
                <span>Nationality: </span>
                <span>Belarusian</span>
              </li>
            </ul>
          </MyInfo>
          About
        </InfoContainer>
      </Container>
    </Wr>
  );
}

export default About;
