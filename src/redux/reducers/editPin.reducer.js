const editPinReducer = (state  = {}, action) => {
    if(action.type == 'SET_EDIT_PIN') {
        return action.payload;
    } else if (action.type == 'PIN_EDIT_ONCHANGE') {
        return {
            //keep old unchanged data...
            ...state,
            //update the property sent with the value sent
           [action.payload.property] : action.payload.value
        }
    } else if (action.type == 'PIN_EDIT_CLEAR') {
        return {};
    }
    return state;
}

export default editPinReducer;