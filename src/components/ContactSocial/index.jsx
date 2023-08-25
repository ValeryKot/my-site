import React from 'react';
import {styled} from 'styled-components';
import SocialButton from '../ui/Button/SocialButton/index';
import {SOCIAL_LINKS} from '../../utils/static';

const Wr = styled.div`
margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

export default function ContactSocial() {
  return (
    <Wr>
      {SOCIAL_LINKS.map((sl) => (
        <SocialButton icon={sl.icon} link={sl.link} key={sl.link} />
      ))}
    </Wr>
  );
}
