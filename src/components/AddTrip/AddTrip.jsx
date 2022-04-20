import React, { useState } from 'react';
import { Button, Input } from '@mui/material';
import swal from 'sweetalert';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

function AddTrip() {
  const history = useHistory();

  let [state, setState] = useState({
    locationName: '',
    latitude: '',
    longitude: '',
    startDate: '',
    endDate: ''
  })

  const handleChange = (event) => {
    let value = event.target.value;
    setState({
      ...state,
      [event.target.name] : value})
  }

  const handleClick = () => {
    console.log(state);
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
        <Input
          type="text"
          name="locationName"
          value={state.locationName}
          onChange={handleChange}
          placeholder="Location Name"
        ></Input>

        <Input
          type="text"
          name="latitude"
          placeholder="Latitude"
          value={state.latitude}
          onChange={handleChange}
        ></Input>

        <Input
          type="text"
          name="longitude"
          placeholder="Longitude"
          value={state.longitude}
          onChange={handleChange}
        ></Input>

        <Input
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={state.startDate}
          onChange={handleChange}
        ></Input>

        <Input
          type="date"
          name="endDate"
          placeholder="End Date"
          value={state.endDate}
          onChange={handleChange}
        ></Input>

        <Button onClick={handleClick}>ADD TRIP</Button>
    </div>
  );
}

export default AddTrip;
