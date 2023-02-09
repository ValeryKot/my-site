import React, {useReducer, useRef, useState} from 'react';
import styled from 'styled-components';
import {BPT} from '../design';
import {FEEDBACK} from '../../utils/static';
import formReducer from '../../utils/reducers/formReducer';
import formValidityReducer from '../../utils/reducers/formValidityReducer';
import Input from '../Input';
import InputArea from '../InputArea';
import ActionButton from '../ui/Button/ActionButton';
import send_icon from '../../images/icons/contact.svg';

const Wr = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  & form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  @media ${BPT.lg} {
  width: 100%;
  }
`;

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const initialValidityState = {
  nameError: false,
  emailError: false,
  subjectError: false,
  isFormValid: false,
};

export default function ContactForm() {
  const [formState, setFormState] = useReducer(formReducer, initialFormState);
  const [formValidityData, setFormValidityData] = useReducer(
    formValidityReducer,
    initialValidityState
  );
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormState({
      type: 'HANDLE_INPUT',
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const validate = (type, state) => {
    setFormValidityData({type: type, payLoad: state});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(FEEDBACK, {
      method: 'POST',
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log('SUCCESSFULLY SUBMITTED');
        setLoading(false);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <Wr>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Input
          title='YOUR Name'
          name='name'
          value={formState.name}
          onChange={(e) => handleChange(e)}
          onBlur={() => validate('VALIDATE_NAME', formState)}
          required
          error={formValidityData.nameError}
        />
        <Input
          title='YOUR Email'
          type='text'
          name='email'
          value={formState.email}
          onChange={(e) => handleChange(e)}
          onBlur={() => validate('VALIDATE_EMAIL', formState)}
          required
          error={formValidityData.emailError}
        />
        <Input
          title='YOUR Subject'
          name='subject'
          value={formState.subject}
          onChange={(e) => handleChange(e)}
          onBlur={() => validate('VALIDATE_SUBJECT', formState)}
          required
          error={formValidityData.subjectError}
        />
        <InputArea
          title='YOUR Message'
          name='message'
          type='text'
          value={formState.message}
          onChange={(e) => handleChange(e)}
        />
        {formValidityData.isFormValid && (
          <input
            style={{padding: 10}}
            type='submit'
            value={loading ? 'Loading...' : 'SEND MESSAGE'}
          />
        )}
        <ActionButton title="Send message" icon={send_icon} />
      </form>
    </Wr>
  );
}
