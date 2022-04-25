const allUsersReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FUTURE_FRIENDS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // trip will be on the redux state at:
  // state.trip
  export default allUsersReducer;
  