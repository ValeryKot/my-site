import React, {useEffect} from 'react';
import {createPortal} from "react-dom";
import styled, {css} from 'styled-components';
import {
  IoDocumentTextOutline,
  IoCodeSlashOutline,
  IoPersonOutline,
  IoOpenOutline,
} from 'react-icons/io5';
import close_icon from '../../images/icons/close.svg';
import {
  BPT,
  white,
  secondaryHover,
  primaryLt,
  primaryHover,
  h2l,
  bold,
  bodyMd,
} from '../design';

const Wr = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.35s;
  z-index: 100;
  ${(props) =>
    props.$active &&
    css`
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    `}
`;

const ContentContainer = styled.div`
  position: relative;
  width: 80%;
  height: auto;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '680px')};

  @media ${BPT.md} {
    width: 90%;
    max-width: unset;
  }
`;

const Content = styled.div`
  padding: 32px;
  width: 100%;
  background: ${secondaryHover};
  border: 2px solid ${primaryLt};
  color: ${white};
  border-radius: 16px;
  max-height: 85vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  h2 {
    max-width: 80%;
    margin: 0 auto;
    color: ${primaryHover};
    ${h2l};
    ${bold};
    text-transform: uppercase;
    padding: 10px 0 20px;
    text-align: center;
    margin-bottom: 8px;
    white-space: pre-line;

  }
  @media ${BPT.md} {
    padding: 15px;
  }
`;

const CloseButton = styled.img`
  cursor: pointer;
  position: absolute;
  right: -52px;
  top: 2px;
  z-index: 3;
  &:hover {
    filter: brightness(130%);
  }
  @media ${BPT.md} {
    right: 2px;
  top: 2px;
  }
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-bottom: 25px;
`;
const InfoItem = styled.div`
  margin-bottom: 8px;
  padding-right: 8px;
  width: 100%;
  max-width: 100%;
  flex: 0 0 auto;
  ${bodyMd};
  color: ${white};
  word-wrap: break-word;
  &:nth-child(1),
  &:nth-child(2) {
    width: fit-content;
    flex: 0 0 50%;
  }
  & span {
    opacity: 0.7;
    margin-right: 4px;
    text-transform: capitalize;
    white-space: nowrap;
  }
  & i {
    display: inline-block;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    margin-right: 4px;
    transform: translateY(2px);
  }
  & a {
    color: ${primaryHover};
    text-decoration: none;
    white-space: nowrap;
    display: inline;
  }
`;


const Figure = styled.figure`
  width: 100%;
  max-height: 370px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 105%;
  overflow: hidden;
  background: ${secondaryHover};
  border-radius: 8px;
  & img {
    height: 100%;
    width: 100%;
  }
`;

const StaticWr = styled.div`
  position: relative;
  & p,
  ul,
  pre {
    margin-bottom: 8px;
    padding: 0 8px;
    width: 100%;
    max-width: 100%;
    flex: 0 0 auto;
    ${bodyMd};
    color: ${white};
    white-space: normal;
  }
  & li,
  pre {
    position: relative;
    padding: 0 16px;
    list-style: none;
  }
  & li::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${primaryHover};
  }
  & pre {
    color: ${primaryHover};
  }
  & a {
    color: ${primaryHover};
    text-decoration: none;
  }
  & figure > img {
    width: fit-content;
    max-width: 100%;
    max-height: 370px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 12px;
  }
`;


export const Modal = ({active, onClose, data, width}) => {
  useEffect(() => {
    if (active) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = '';
    }

    return () => {
      document.documentElement.style.overflowY = '';
    };
  }, [active]);
  if (data.site_ID) {
    return createPortal(
      <Wr $active={active} onClick={onClose}>
        <ContentContainer maxWidth={width}>
          <CloseButton src={close_icon} alt='close' onClick={onClose} />
          <Content onClick={(e) => e.stopPropagation()}>
            <h2>{data.title}</h2>
            <StaticWr dangerouslySetInnerHTML={{__html: data.content}} />
          </Content>
        </ContentContainer>
      </Wr>, document.body
    );
  };

  return createPortal(
    <Wr $active={active} onClick={onClose}>
      <ContentContainer maxWidth={width}>
        <CloseButton src={close_icon} alt='close' onClick={onClose} />
        <Content onClick={(e) => e.stopPropagation()}>
          <h2>{data.title}</h2>
          <InfoBox>
            <InfoItem>
              <span>
                <i>
                  <IoDocumentTextOutline />
                </i>
                project:
              </span>
              {data.type}
            </InfoItem>
            {data.link.length > 0 && (
              <InfoItem>
                <span>
                  <i>
                    <IoOpenOutline />
                  </i>
                  preview:
                </span>
                <a href={data.link} target='_blank' rel='noreferrer'>
                  {data.link.replace('https://', '')}
                </a>
              </InfoItem>
            )}
            {data.client.length > 0 && (
              <InfoItem>
                <span>
                  <i>
                    <IoPersonOutline />
                  </i>
                  client:
                </span>
                {data.client}
              </InfoItem>
            )}
            {data.technology.length > 0 && (
              <InfoItem>
                <span>
                  <i>
                    <IoCodeSlashOutline />
                  </i>
                  language:
                </span>
                {data.technology.join(', ')}
              </InfoItem>
            )}
            {data.libraries.length > 0 && (
              <InfoItem>
                <span>
                  <i>
                    <IoCodeSlashOutline />
                  </i>
                  libraries:
                </span>
                {data.libraries.join(', ')}
              </InfoItem>
            )}
          </InfoBox>
          <Figure>
            <img src={data.file} alt='Preview' />
          </Figure>
        </Content>
      </ContentContainer>
    </Wr>, document.body
  );
};
