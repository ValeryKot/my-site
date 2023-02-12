import React from 'react';
import styled from 'styled-components';
import {BPT} from '../../components/design';
import ContactForm from '../../components/ContactForm';
import ContactInfo from '../../components/ContactInfo';
import TitleSection from '../../components/ui/TitleSection';

const Wr = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.body};
  padding-bottom: 85px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  @media ${BPT.xl} {
    padding: 0 24px;
  }
  @media ${BPT.md} {
    padding: 0 16px;
  }
`;
const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  @media ${BPT.lg} {
    gap: 24px;
  }
`;

function Contact() {
  return (
    <Wr>
      <Container>
      <TitleSection title='Get in ' secondTitle='touch' subtitle='contact' />
        <InfoContainer>
          <ContactInfo />
          <ContactForm />
        </InfoContainer>
      </Container>
    </Wr>
  );
}

export default Contact;
