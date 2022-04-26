import React, { useState, useEffect } from 'react';
import { Button, Input } from '@mui/material';
import swal from 'sweetalert';
import axios from 'axios';
import TripMap from '../TripMap/TripMap';
import PinForm from '../PinForm/PinForm';
import UserForm from '../UserForm/UserForm';
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

function AddTrip() {
  const history = useHistory();
  const friends = useSelector((store) => store.friendReducer);

  let [state, setState] = useState({
    locationName: '',
    latitude: 40.2645,
    longitude: -97.425,
    startDate: '',
    endDate: '', 
    pins: [], 
    users: [],
  })
 
  const handleChange = (event) => {
    let value = event.target.value;
    setState({
      ...state,
      [event.target.name] : value})
  }

  const handleClick = () => {
    // console.log(state)
    swal({
      title: "Is this correct?",
      text: `Your trip to: ${state.locationName} from ${state.startDate} to ${state.endDate}?`,
      icon: "info",
      buttons: true,
      dangerMode: true,
    })
    .then((willSubmit) => {
      if (willSubmit) {
        swal("Your trip has been saved!", {
          icon: "success",
        });

        axios.post(`/api/trip`, {state})
        .then(() => {
          setState({
            locationName: '',
            latitude: '',
            longitude: '',
            startDate: '',
            endDate: ''
          })
          history.push('/user');
        }).catch(error => {
          swal('Something went wrong! Please close and try again!')
        })
      } else {
        swal("Your trip has not been saved.");
      }
    });

  }

  return (
    <div className="container">
      <div>
        <Input
          type="text"
          name="locationName"
          variant="outlined"
          value={state.locationName}
          onChange={handleChange}
          label="Location Name"
        ></Input>

        <Input
          type="text"
          name="latitude"
          variant="outlined"
          label="Latitude"
          value={state.latitude}
          onChange={handleChange}
        ></Input>

        <Input
          type="text"
          name="longitude"
          variant="outlined"
          label="Longitude"
          value={state.longitude}
          onChange={handleChange}
        ></Input>

        <Input
          type="date"
          name="startDate"
          variant="outlined"
          label="Start Date"
          value={state.startDate}
          onChange={handleChange}
        ></Input>

        <Input
          type="date"
          name="endDate"
          variant="outlined"
          label="End Date"
          value={state.endDate}
          onChange={handleChange}
        ></Input>
        </div>
        <br />
        <TripMap
        details={state}
        pins={state.pins}
        />
        <br />
        <PinForm
        // getPins={getPins}
         />
        
        <br />
        <UserForm
        friends={friends}
        // getUsers={getUsers}
        />
        <Button onClick={handleClick}>ADD TRIP</Button>
    </div>
  );
}

export default AddTrip;
