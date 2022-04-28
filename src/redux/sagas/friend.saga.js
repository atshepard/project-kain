import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_TRIPS" actions

function* addFriend(action) {
  try {
    yield axios.post('/api/friend', action.payload);
    yield put({type: 'FETCH_MY_FRIENDS'});
    yield put({type: 'FETCH_FUTURE_FRIENDS'});
  } catch (error) {
    console.log('error in adding a friend :(', error);
  }
}

function* fetchFutureFriends() {
  try {
    const response = yield axios.get('/api/friend');
    yield put({ type: 'SET_FUTURE_FRIENDS', payload: response.data });
  } catch (error) {
    console.log('Trip get request failed', error);
  }
}

function* fetchFriends() {
  try {
    const response = yield axios.get('/api/friend/mine');
    yield put({ type: 'SET_MY_FRIENDS', payload: response.data });
  } catch (error) {
    console.log('Trip get request failed', error);
  }
}

function* friendSaga() {
  yield takeLatest('FETCH_FUTURE_FRIENDS', fetchFutureFriends);
  yield takeLatest('FETCH_MY_FRIENDS', fetchFriends);
  yield takeLatest('ADD_FRIEND', addFriend);
}

export default friendSaga;
