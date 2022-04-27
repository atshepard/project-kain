const locReducer = (state = {lat:0, lng: 0}, action) => {
    switch (action.type) {
      case 'SET_LOC':
        return action.payload.location;
      default:
        return state;
    }
  };
  
  // trip will be on the redux state at:
  // state.trip
  export default locReducer;
  