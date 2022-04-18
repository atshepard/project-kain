import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function UserPage() {
  const dispatch = useDispatch();

  //on page load, render the trips for this specific user: 
  useEffect(() => {
    console.log('in use effect');
    dispatch({type: 'FETCH_TRIPS'});
  });
  
  const user = useSelector((store) => store.user);
  const trips = useSelector((store => store.tripReducer));

  return (
    <div className="container">
      <h2>Welcome, {user.display_name}!</h2>
      <p>A list of your trips will render here:</p>
      {/* trips.map to generate Trip component */}
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
