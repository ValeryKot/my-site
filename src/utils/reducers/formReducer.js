const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const formReducer = (state = initialFormState, action) => {
  switch (action.type) {
    case 'HANDLE_INPUT':
      return {
        ...state,
        [action.field]: action.payload,
      };
    case 'RESET':
      return {
        ...initialFormState,
      };
    default:
      return state;
  }
};

export default formReducer;
