const pinsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PINS':
        return action.payload;
      case 'CLEAR_PINS':
        return [];
      default:
        return state;
    }
  };
  

  export default pinsReducer;
  