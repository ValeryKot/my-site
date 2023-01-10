import React, {useEffect} from 'react';
import styled, {css} from 'styled-components';
import close_icon from '../../images/icons/close.svg'

const Wr = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.25s;
  z-index: 500;
  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    `}
`;

const ContentContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '680px')};

  @media (max-width: 800px) {
    max-width: unset;
  }
`;

const Content = styled.div`
  padding: 36px;
  width: 100%;
  min-height: 400px;
  background: #ffffff;
  border-radius: 29px;
  max-height: 90vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CloseButton = styled.img`
  cursor: pointer;
  position: absolute;
  right: -52px;
  top: 2px;
  z-index: 3;
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
  return (
    <Wr active={active} onClick={onClose}>
      <ContentContainer maxWidth={width}>
      <CloseButton src={close_icon} alt='close' onClick={onClose} />
        <Content onClick={(e) => e.stopPropagation()}>{data.title}</Content>
      </ContentContainer>
    </Wr>
  );
};
