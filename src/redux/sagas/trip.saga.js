import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_TRIPS" actions
function* fetchTrips() {
  try {
    const response = yield axios.get('/api/trip');
    yield put({ type: 'SET_TRIPS', payload: response.data });
  } catch (error) {
    console.log('Trip get request failed', error);
  }
}

function* fetchTripDetails (action) {
  try {
    // console.log('fetching trip deets')
    const response = yield axios.get(`/api/trip/${action.payload}`);
    // console.log('logging response.data: ', response.data[0])
    yield put({type: 'SET_DETAILS', payload: response.data[0]});
  } catch (error) {
    console.log('Trip details get request failed: ', error);
  }
}

function* fetchMedia (action) {
  try {
    const response = yield axios.get(`/api/trip/media/${action.payload}`);
    yield put({type: 'SET_MEDIA', payload: response.data});
  } catch (error) {
    console.log('Media get request failed: ', error);
  }
}

function* fetchPins (action) {
  try {
    const response = yield axios.get(`/api/trip/pins/${action.payload}`);
    yield put({type: 'SET_PINS', payload: response.data});
  } catch (error) {
    console.log('Pins get request failed: ', error);
  }
}

function* tripSaga() {
  yield takeLatest('FETCH_TRIPS', fetchTrips);
  yield takeLatest('FETCH_TRIP_DETAILS', fetchTripDetails);
  yield takeLatest('FETCH_TRIP_MEDIA', fetchMedia);
  yield takeLatest('FETCH_TRIP_PINS', fetchPins);
}

export default tripSaga;
