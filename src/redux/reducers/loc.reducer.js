const locReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_LOC':
        return action.payload;
      default:
        return state;
    }
  };
  
  // trip will be on the redux state at:
  // state.trip
  export default locReducer;
  