import React, { useState } from 'react';
import { Button, Input } from '@mui/material';

function AddTrip() {

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
    console.log('clicked the ADD TRIP button!', state);
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
