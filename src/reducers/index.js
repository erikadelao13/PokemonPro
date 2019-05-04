const INITIAL_STATE = {
    authorize: false,
    user: {}
  };
  
  function data(state=INITIAL_STATE, action) {
    switch (action.type) {
      case 'SET_AUTH':
        return {
          ...state,
          ...action.payload
        }
      case 'SET_USER_INFO':
        return {
          ...state,
          user: {
            ...action.payload
          }
        }
      case 'DESTROY_SESSION':
        return INITIAL_STATE;
      default:
        return state;
    }
  }
  
  export default data;
  