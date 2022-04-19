import React, { useState } from 'react';
import { Button, FormControl, Input } from '@mui/material';

function AddTrip() {

  const handleClick = () => {
    console.log('clicked the ADD TRIP button!');
  }

  return (
    <div className="container">
      <FormControl>
        <Input
          type="text"
          placeholder="Location Name"
        ></Input>

        <Input
          type="text"
          placeholder="Latitude"
        ></Input>

        <Input
          type="text"
          placeholder="Longitude"
        ></Input>

        <Input
          type="date"
          placeholder="Start Date"
        ></Input>

        <Input
          type="date"
          placeholder="End Date"
        ></Input>

        <Button onClick={handleClick}>ADD TRIP</Button>
      </FormControl>
    </div>
  );
}

export default AddTrip;
