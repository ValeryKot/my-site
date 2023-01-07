import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {h1l, primaryHover, bodyLg} from '../../components/design';

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
    ${primaryHover} 81.85%
  );
/* 
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
  } */
`;

const Avatar = styled.div`

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
    color: ${(props) => props.theme.title};
    text-align: left;
  }
  & span {
    color: ${primaryHover};
  }
  & p {
    ${bodyLg};
    color: ${(props) => props.theme.title};
    text-align: left;
  }
`;

function Home() {
  return (
    <Wr>
    <Avatar
        as={motion.div}
        initial={{x: -2000}}
        animate={{x: 0}}
        transition={{duration: 0.7, ease: 'circOut'}}

    />
      <TextContainer
        as={motion.div}
        // initial={{y: 2000}}
        // animate={{y: 0}}
        // transition={{duration: 0.7, ease: 'circOut'}}
        initial={{filter: 'blur(100px)', opacity: 0}}
        animate={{filter: 'blur(0px)', opacity: 1}}
        transition={{duration: 2}}
      >
        <TextWr>
          <h1>
            I’m <span>VALERY KOT</span>.<br />
            WEB DEVELOPER
          </h1>
          <p>
            I'm a Belorusian based front‑end developer focused on crafting clean
            & user‑friendly experiences, I am passionate about building
            excellent software that improves the lives of those around me.
          </p>
          <button style={{padding: '10px'}}>About</button>
        </TextWr>
      </TextContainer>
    </Wr>
  );
}

export default Home;
