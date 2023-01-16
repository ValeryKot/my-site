import React, {useReducer, useRef, useState} from 'react';
import styled from 'styled-components';
import {FEEDBACK} from '../../utils/static';
import Input from '../Input';
import InputArea from '../InputArea';

const Wr = styled.div`
  width: 66.7%;
  display: flex;
  flex-direction: column;
  & form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const formReducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE_INPUT':
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

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

const formValidityReducer = (state, action) => {
  let isValid = false;
  switch (action.type) {
    case 'VALIDATE_NAME':
      isValid = action.payLoad.name.length > 1 ? true : false;
      return {
        ...state,
        ...{
          nameError: !isValid,
          isFormValid:
            isValid &&
            !state.nameError &&
            !state.subjectError &&
            !state.emailError,
        },
      };
    case 'VALIDATE_SUBJECT':
      isValid = action.payLoad.subject.length > 1 ? true : false;
      return {
        ...state,
        ...{
          subjectError: !isValid,
          isFormValid:
            isValid &&
            !state.nameError &&
            !state.subjectError &&
            !state.emailError,
        },
      };
    case 'VALIDATE_EMAIL':
      isValid =
        action.payLoad.email.length > 0 &&
        /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(
          action.payLoad.email
        )
          ? true
          : false;
      return {
        ...state,
        ...{
          emailError: !isValid,
          isFormValid:
            isValid &&
            !state.nameError &&
            !state.subjectError &&
            !state.emailError,
        },
      };
    default:
      return state;
  }
};

export default function ContactForm() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const [formValidityData, setFormValidityData] = useReducer(
    formValidityReducer,
    initialValidityState
  );
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const scriptUrl = FEEDBACK;

  const handleChange = (e) => {
    dispatch({
      type: 'HANDLE_INPUT',
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, {
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
          onBlur={(e) =>
            setFormValidityData({type: 'VALIDATE_NAME', payLoad: formState})
          }
          required
          error={
            formValidityData.nameError && 'Must be more than one character'
          }
        />
        <Input
          title='YOUR Email'
          type='text'
          name='email'
          value={formState.email}
          onChange={(e) => handleChange(e)}
          onBlur={(e) =>
            setFormValidityData({type: 'VALIDATE_EMAIL', payLoad: formState})
          }
          required
          error={
            formValidityData.emailError && 'Please fill in the correct email'
          }
        />
        <Input
          title='YOUR Subject'
          name='subject'
          value={formState.subject}
          onChange={(e) => handleChange(e)}
          onBlur={(e) =>
            setFormValidityData({type: 'VALIDATE_SUBJECT', payLoad: formState})
          }
          required
          error={
            formValidityData.subjectError && 'Must be more than one character'
          }
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
      </form>
    </Wr>
  );
}
