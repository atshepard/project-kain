const tripFriendReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_TRIP_FRIENDS':
        return action.payload;
      case 'CLEAR_TRIP_FRIENDS':
        return [];
      default:
        return state;
    }
  };
  
  // trip will be on the redux state at:
  // state.trip
  export default tripFriendReducer;
  