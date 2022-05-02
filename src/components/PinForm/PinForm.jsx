import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, TextField, Box} from '@mui/material';



function PinForm() {
    const dispatch = useDispatch();
    const clickedPin = useSelector((store) => store.mapClickReducer);
    const [pin, setPin] = useState({
        pin_name: '',
        pin_desc: '',
        latitude: clickedPin.lat,
        longitude: clickedPin.lng,
    })

    const handleChange = (event) => {
        setPin({
            ...pin,
            [event.target.name]: event.target.value
        })
    }

    const handleClick = () => {
        dispatch({ type: 'ADD_PIN', payload: pin })
        setPin({
            pin_name: '',
            pin_desc: '',
        })
        dispatch({ type: 'CLEAR_LATLNG' });
    }

    return (<>
        <br />
        <Box sx={{ p: 2, border: '1px grey' }} display="flex">
            <TextField
                type="text"
                name="pin_name"
                label="Pin Name"
                variant="outlined"
                value={pin.pin_name}
                onChange={(event) => handleChange(event)}
            ></TextField>
            <br />
            <TextField
                type="text"
                name="pin_desc"
                variant="outlined"
                value={pin.pin_desc}
                onChange={(event) => handleChange(event)}
                label="Pin Description"
            ></TextField>
            <br />
            <TextField
                type="text"
                variant="outlined"
                name="latitude"
                value={clickedPin.lat}
                onChange={(event) => handleChange(event)}
                label="Pin Latitude"
            ></TextField>
            <br />
            <TextField
                type="text"
                variant="outlined"
                name="longitude"
                value={clickedPin.lng}
                onChange={(event) => handleChange(event)}
                label="Pin Longitude"
            ></TextField>

            <Button
                variant="contained"
                onClick={handleClick}
            >Add</Button>
            </Box>
    </>)
}

export default PinForm;