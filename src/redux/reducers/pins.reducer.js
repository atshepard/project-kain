const pinReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PINS':
        return action.payload;
      case 'ADD_PIN':
        return [...state, action.payload];
      case 'CLEAR_PINS':
        return [];
      default:
        return state;
    }
  };
  

  export default pinReducer;
  