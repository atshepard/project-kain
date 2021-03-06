import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import tripsReducer from './trips.reducer';
import allUsersReducer from './allusers.reducer';
import detailsReducer from './details.reducer';
import friendReducer from './friend.reducer';
import editTripReducer from './edit.reducer';
import mediaReducer from './media.reducer';
import pinsReducer from './pins.reducer';
import editPinReducer from './editPin.reducer';
import mapClickReducer from './mapClick.reducer';
import locReducer from './loc.reducer';
import tripFriendReducer from './tripFriend.reducer';
import newPinsReducer from './newPins.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  tripsReducer, 
  detailsReducer, 
  editTripReducer, 
  mediaReducer, 
  pinsReducer, 
  friendReducer, 
  allUsersReducer,
  editPinReducer, 
  mapClickReducer, 
  locReducer, 
  tripFriendReducer, 
  newPinsReducer
});

export default rootReducer;
