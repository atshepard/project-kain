const mapClickReducer = (state = {lat: 0, lng: 0}, action) => {
    switch (action.type) {
    case 'SET_LATLNG':
        return action.payload;
    case 'CLEAR_LATLNG':
        return {lat: 0, lng: 0};
    default:
        return state;
    }
  };
  
  export default mapClickReducer;
  