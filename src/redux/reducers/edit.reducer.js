// hold only the single student object being edited
// const editStudent = (state  = {}, action) => {
//     if(action.type == 'SET_EDIT_PERSON') {
//         return action.payload;
//     } else if (action.type == 'EDIT_ONCHANGE') {
//         return {
//             //keep old unchanged data...
//             ...state,
//             //update the property sent with the value sent
//            [action.payload.property] : action.payload.value
//         }
//     }
//     return state;
// }