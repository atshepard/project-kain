const friendReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MY_FRIENDS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // trip will be on the redux state at:
  // state.trip
  export default friendReducer;
  