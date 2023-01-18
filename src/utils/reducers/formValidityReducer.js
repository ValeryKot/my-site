import {EMAIL_REGEXP} from '../static';

const formValidityReducer = (state, action) => {
  let isValid = false;
  switch (action.type) {
    case 'VALIDATE_NAME':
      isValid = action.payLoad.name.length > 1 ? true : false;
      return {
        ...state,
        ...{
          nameError: !isValid ? 'Must be more than one character' : '',
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
          subjectError: !isValid ? 'Must be more than one character' : '',
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
        EMAIL_REGEXP.test(action.payLoad.email)
          ? true
          : false;
      return {
        ...state,
        ...{
          emailError: !isValid ? 'Please fill in the correct email' : '',
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

export default formValidityReducer;
