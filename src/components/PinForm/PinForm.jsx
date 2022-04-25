import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, Input } from '@mui/material';


function PinForm() {
    const pin = useSelector((store) => store.pinReducer);

    const handleChange = (event) => {
        let value = event.target.value;
        setPin({
            ...state,
            [event.target.name]: value
        })
    }

    const handleClick = () => {

        
    }

    return (<>
        <Input
            type="text"
            name="pinName"
            value={pin.pin_name}
            onChange={(event) => handleChange(event)}
            placeholder="Pin Name"
        ></Input>
        <br />
        <Input
            type="text"
            name="pinDescription"
            value={pin.pin_desc}
            onChange={(event) => handleChange(event)}
            placeholder="Pin Description"
        ></Input>
        <br />
        <Input
            type="text"
            name="pinLatitude"
            value={pin.latitude}
            onChange={(event) => handleChange(event)}
            placeholder="Pin Latitude"
        ></Input>
        <br />
        <Input
            type="text"
            name="pinLongitude"
            value={pin.longitude}
            onChange={(event) => handleChange(event)}
            placeholder="Pin Longitude"
        ></Input>

        <Button
            onClick={handleClick}
        >Add Another Pin</Button>
    </>)
}

export default PinForm;