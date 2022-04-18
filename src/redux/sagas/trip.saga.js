import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_TRIPS" actions
function* fetchTrip() {
  try {
    const response = yield axios.get('/api/trip');

  
    yield put({ type: 'SET_TRIPS', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* tripSaga() {
  yield takeLatest('FETCH_TRIPS', fetchTrip);
}

export default tripSaga;
