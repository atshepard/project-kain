import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import TripItem from '../TripItem/TripItem';

function UserPage() {
  const dispatch = useDispatch();

  //on page load, render the trips for this specific user: 
  useEffect(() => {
    // console.log('in use effect');
    dispatch({type: 'FETCH_TRIPS'});
    dispatch({type: 'SET_MY_FRIENDS'})
  }, []);
  
  const user = useSelector((store) => store.user);
  const trips = useSelector((store) => store.tripsReducer);

  // const handleClick = () => {
  //   console.log('console logging trips array: ', trips);
  // }

  return (
    <div className="container">
      <h2>Welcome, {user.display_name}!</h2>
      <p>A list of your trips will render here:</p>
      {/* trips.map to generate Trip component */}

      {trips.map((trip, i) => {
        return (
          <TripItem
          key={i}
          trip={trip}
          />
        )

      })}
      {/* <button onClick={handleClick}>TESTING</button> */}

      <br />
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
