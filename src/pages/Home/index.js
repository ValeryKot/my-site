import React from 'react';
import styled from 'styled-components';
import {h1l, white, primaryHover, bodyLg} from '../../components/design';

const Wr = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100vh;
  min-height: 100%;
  background: linear-gradient(
      261.62deg,
      ${(props) => props.theme.gradientEnd} 0%,
      ${(props) => props.theme.gradientMid} 80.7%,
      #ffb400 81.85%
    );

  &::before {
    content: '';
    position: absolute;
    z-index: 11;
    top: 64px;
    left: 64px;
    width: 33.34%;
    height: calc(100vh - 128px);
    border-radius: 30px;
    background-image: image-set(
      url(${require('../../images/myPhoto.jpg')}) 1x,
      url(${require('../../images/myPhoto2x.jpg')}) 2x
    );
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(2px 2px 7px rgba(0, 0, 0, 0.8));
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66.6%;
`;

const TextWr = styled.div`
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  & h1 {
    ${h1l};
    font-family: 'Poppins';
    color: ${white};
    text-align: left;
  }
  & span {
    color: ${primaryHover};
  }
  & p {
    ${bodyLg};
    font-family: 'OpenSans';
    color: ${white};
    text-align: left;
  }
`;

function Home() {
  return (
    <>
      <Wr>
        <TextContainer>
          <TextWr>
            <h1>
              I’m <span>VALERY KOT</span>. WEB DEVELOPER
            </h1>
            <p>
              I'm a Belorusian based web designer & front‑end developer focused
              on crafting clean & user‑friendly experiences, I am passionate
              about building excellent software that improves the lives of those
              around me.
            </p>
            <button style={{padding: '10px'}}>About</button>
          </TextWr>
        </TextContainer>
      </Wr>
    </>
  );
}

export default Home;
