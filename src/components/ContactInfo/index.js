import React from 'react';
import styled from 'styled-components';
import {
  BPT,
  semibold,
  h2l,
  bodyMd,
  primaryHover,
  regular,
} from '../../components/design';
import {ADDRESS, PHONE, E_MAIL} from '../../utils/static';
import map_icon from '../../images/icons/map.svg';
import letter_icon from '../../images/icons/letter.svg';
import phone_icon from '../../images/icons/phone.svg';
import ContactSocial from '../ContactSocial';

const Wr = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &::before {
    content: "Don't be shy !";
    text-transform: uppercase;
    ${h2l};
    ${semibold};
    color: ${(props) => props.theme.title};
  }
  @media ${BPT.lg} {
    width: 100%;
    & br {
      display: none;
    }
  }
`;

const TextBox = styled.div`
  width: 100%;
  color: ${(props) => props.theme.title};
  ${bodyMd};
`;

const TextAddress = styled.p`
  padding-left: 48px;
  position: relative;
  color: ${(props) => props.theme.title};
  ${bodyMd};
  ${semibold};
  white-space: pre-wrap;
  & img {
    position: absolute;
    display: inline-block;
    left: 0;
    top: 0px;
    width: 32px;
    height: 32px;
    color: ${primaryHover};
  }
  & span {
    display: block;
    text-transform: uppercase;
    opacity: .8;
    ${regular};
  }
  & a {
    outline: none;
    text-decoration: none;
    color: ${(props) => props.theme.title};
  }
  & a > br {
      display: none;
    }
`;

export default function ContactInfo() {
  return (
    <Wr>
      <TextBox>
      Feel free to get in touch with me. I am always <br/>open to discussing new projects, creative ideas <br/>or opportunities to be part of your visions.
      </TextBox>
      <TextAddress>
        <img src={map_icon} alt='map' />
        <span>Address Point</span>
        {ADDRESS}
      </TextAddress>
      <TextAddress>
        <img src={letter_icon} alt='letter' />
        <span>MAIL ME</span>
        <a href={`mailto:${E_MAIL}`} target='_blank' rel='noreferrer'>{E_MAIL}</a>
      </TextAddress>
      <TextAddress>
        <img src={phone_icon} alt='letter' />
        <span>CALL ME</span>
        <a href={`tel:${PHONE}`} target='_blank' rel='noreferrer'>{PHONE}</a>
      </TextAddress>
      <ContactSocial/>
    </Wr>
  );
}
