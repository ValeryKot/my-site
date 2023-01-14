import React from 'react';
import styled from 'styled-components';
import ContactForm from '../../components/ContactForm';
import ContactInfo from '../../components/ContactInfo';
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

function Contact() {
  return (
    <Wr>
      <TitleSection title='Get in ' secondTitle='touch' subtitle='contact' />
      <Container>
        <InfoContainer>
          <ContactInfo />
          <ContactForm />
        </InfoContainer>
      </Container>
    </Wr>
  );
}

export default Contact;
