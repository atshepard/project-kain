import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, Input } from '@mui/material';


function PinForm({ getPins }) {
    const pins = [];
    const [pin, setPin] = {
        pinName: '',
        pinDescription: '',
        pinLatitude: '',
        pinLongitude: '',
    }

    const handleChange = (event) => {
        let value = event.target.value;
        setPin({
            ...state,
            [event.target.name]: value
        })
    }

    const handleClick = () => {
        pins.push(pin);
        setPin({
            pinName: '',
            pinDescription: '',
            pinLatitude: '',
            pinLongitude: '',
        })
    }

    return (<>

        <Input
            type="text"
            name="pinName"
            value={pin.pinName}
            onChange={(event) => handleChange(event)}
            placeholder="Pin Name"
        ></Input>
        <br />
        <Input
            type="text"
            name="pinDescription"
            value={pin.pinDescription}
            onChange={(event) => handleChange(event)}
            placeholder="Pin Description"
        ></Input>
        <br />
        <Input
            type="text"
            name="pinLatitude"
            value={pin.pinLatitude}
            onChange={(event) => handleChange(event)}
            placeholder="Pin Latitude"
        ></Input>
        <br />
        <Input
            type="text"
            name="pinLongitude"
            value={pin.pinLongitude}
            onChange={(event) => handleChange(event)}
            placeholder="Pin Longitude"
        ></Input>

        <Button
            onClick={handleClick}
        >Add Another Pin</Button>
    </>)
}

export default PinForm;