import React, { useState, useEffect } from 'react';
import { Box, Button, InputLabel, Card, CardContent, CardHeader, TextField } from '@mui/material';
import swal from 'sweetalert';
import axios from 'axios';
import TripMap from '../TripMap/TripMap';
import PinForm from '../PinForm/PinForm';
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

function AddTrip() {
  const dispatch = useDispatch();
  const history = useHistory();
  const pins = useSelector((store) => store.newPinsReducer);
  const loc = useSelector((store) => store.locReducer);

  useEffect(() => {
    // console.log('in use effect')
    dispatch({type: 'CLEAR_PINS'});
  }, []);


  let [state, setState] = useState({
    locationName: '',
    latitude: loc.lat,
    longitude: loc.lng,
    startDate: '',
    endDate: '', 
    pins: pins, 
  })
 
  const handleChange = (event) => {
    let value = event.target.value;
    setState({
      ...state,
      [event.target.name] : value})
  }

  const handleClick = () => {
    // console.log(state)
        axios.post(`/api/trip`, {state})
        .then(() => {
          setState({
            locationName: '',
            latitude: '',
            longitude: '',
            startDate: '',
            endDate: ''
          })
          // dispatch({type: 'CLEAR_PINS'});
          history.push('/user');
        });
  }

  return (
    <div className="container">
      <div>
        <Box sx={{ p: 2, m:1, border: '1px grey' }} display="flex">
        <TextField
          type="text"
          name="locationName"
          variant="outlined"
          value={state.locationName}
          onChange={handleChange}
          label="Location Name"
        ></TextField>

        <TextField
          type="text"
          name="latitude"
          variant="outlined"
          label="Latitude"
          value={state.latitude}
          onChange={handleChange}
        ></TextField>

        <TextField
          type="text"
          name="longitude"
          variant="outlined"
          label="Longitude"
          value={state.longitude}
          onChange={handleChange}
        ></TextField>

        <TextField
          type="date"
          name="startDate"
          variant="outlined"
          label="Start Date"
          InputLabelProps={{shrink: true}}
          value={state.startDate}
          onChange={handleChange}
        ></TextField>

        <TextField
          type="date"
          name="endDate"
          variant="outlined"
          InputLabelProps={{shrink: true}}
          label="End Date"
          value={state.endDate}
          onChange={handleChange}
        ></TextField>
        </Box>
        </div>
        <br />
        {state &&
        <TripMap
        details={state}
        pins={pins}
        />}
        <br />
        {pins && pins.map((pin, i) => {
            <div className="cardContainer">
                <Card key={i}>
                    <CardHeader title={pin.pin_name} />
                    <CardContent>
                        <p>{pin.pin_desc}</p>
                    </CardContent>
                </Card>
            </div>
        })}
        <br />
        <PinForm
         />
        <br />
        {/* <UserForm
        friends={friends}
        /> */}
        {/* <Box  sx={{ p: 2, m:1, border: '1px grey' }} display="flex">
        <TextField name="media" onChange={handleChange} value={state.media.title} id="outlined-basic" label="Media Title" variant="outlined" />
        <TextField name="media" onChange={handleChange} value={state.media.link} id="outlined-basic" label="Media Link" variant="outlined" />
        <br /> */}
        <Button onClick={handleClick} variant="contained" >ADD TRIP</Button>
        
        
    </div>
  );
}

export default AddTrip;
