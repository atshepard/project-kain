import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_TRIPS" actions
function* fetchLoc() {
  try {
    const response = yield axios.post('/api/trip/loc');
    yield put({ type: 'SET_LOC', payload: response.data });
  } catch (error) {
    console.log('Trip get request failed', error);
  }
}

function* locSaga() {
  yield takeLatest('FETCH_LOC', fetchLoc);
}

export default locSaga;
