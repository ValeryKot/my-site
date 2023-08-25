import React from 'react';
import {styled} from 'styled-components';
import {primaryHover} from '../../../design';

const Wr = styled.a`
  height: 40px;
  width: 40px;
  transition: 0.3s;
  border-radius: 50%;
  background-color: ${(props) => props.theme.subtitle};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${primaryHover};
  }
  & img {
    position: absolute;
    color: ${(props) => props.theme.title};
  }
`;

export default function SocialButton({icon, link}) {
  return (
    <Wr href={link} target='_blank' rel='noreferrer'>
      <img src={icon} alt='icon' />
    </Wr>
  );
}
