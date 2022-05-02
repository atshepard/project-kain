const newPinsReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PIN':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  

  export default newPinsReducer;
  