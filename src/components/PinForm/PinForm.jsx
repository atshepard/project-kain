import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, Input } from '@mui/material';


function PinForm() {
    const dispatch = useDispatch();
    const pins = useSelector((store) => store.pinsReducer);

    const handleChange = (event) => {
        let value = event.target.value;
        setPin({
            ...state,
            [event.target.name]: value
        })
    }

    const handleClick = () => {
        //dispatch 'ADD PIN'
        //dispatch 'CLEAR PIN'
        
    }

    return (<>
        <Input
            type="text"
            name="pinName"
            value={pins.pin_name}
            onChange={(event) => handleChange(event)}
            placeholder="Pin Name"
        ></Input>
        <br />
        <Input
            type="text"
            name="pinDescription"
            value={pins.pin_desc}
            onChange={(event) => handleChange(event)}
            placeholder="Pin Description"
        ></Input>
        <br />
        <Input
            type="text"
            name="pinLatitude"
            value={pins.latitude}
            onChange={(event) => handleChange(event)}
            placeholder="Pin Latitude"
        ></Input>
        <br />
        <Input
            type="text"
            name="pinLongitude"
            value={pins.longitude}
            onChange={(event) => handleChange(event)}
            placeholder="Pin Longitude"
        ></Input>

        <Button
            onClick={handleClick}
        >Add Another Pin</Button>
    </>)
}

export default PinForm;