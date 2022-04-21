const mediaReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MEDIA':
        return action.payload;
      default:
        return state;
    }
  };
  
  // trip will be on the redux state at:
  // state.trip
  export default mediaReducer;
  