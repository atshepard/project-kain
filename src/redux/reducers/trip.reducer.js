const tripReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TRIPS':
      return action.payload;
    default:
      return state;
  }
};

// trip will be on the redux state at:
// state.trip
export default tripReducer;
