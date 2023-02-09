import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {
  h1l,
  primaryHover,
  bodyLg,
  BPT,
  h1m,
  h1s,
  bodyMd,
  bodySm,
} from '../../components/design';
import {ActionButton} from '../../components/ui/Button';
import more_icon from '../../images/icons/more.svg';

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
  @media ${BPT.lg} {
    background: ${(props) => props.theme.body};
  }
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
  @media ${BPT.lg} {
    border-radius: 50%;
    top: 10%;
    left: calc(50% - 135px);
    width: 270px;
    height: 270px;
    border: 4px solid ${(props) => props.theme.lights};
    background-size: 95%;
  }
  @media ${BPT.xs} {
    border-radius: 50%;
    top: 10%;
    left: calc(50% - 110px);
    width: 220px;
    height: 220px;
    border: 3px solid ${(props) => props.theme.lights};
    background-size: 90%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66.6%;
  padding: 0 84px;
  @media ${BPT.lg} {
    position: absolute;
    top: calc(15% + 270px);
    width: 95%;
    padding: 0;
  }
  @media ${BPT.xs} {
    top: calc(15% + 220px);
    width: 95%;
    padding: 0;
  }
`;

const TextWr = styled.div`
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  @media ${BPT.lg} {
    gap: 10px;
    align-items: center;
  }
  & h1 {
    ${h1l};
    color: ${(props) => props.theme.title};
    text-align: left;
    @media ${BPT.lg} {
      ${h1m};
      text-align: center;
    }
    @media ${BPT.md} {
      ${h1s};
    }
  }
  & span {
    color: ${primaryHover};
  }
  & p {
    ${bodyLg};
    color: ${(props) => props.theme.title};
    text-align: left;
    @media ${BPT.lg} {
      text-align: center;
      padding: 0 16px;
    }
    @media ${BPT.sm} {
      ${bodyMd};
    }
    @media ${BPT.sm} {
      ${bodySm};
      text-align: center;
    }
  }
`;

function Home({setPage}) {
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
          <ActionButton title="About me" icon={more_icon} value={'ABOUT'} setPage={setPage} />
        </TextWr>
      </TextContainer>
    </Wr>
  );
}

export default Home;
