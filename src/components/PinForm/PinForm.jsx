import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Button, Input, Card, CardHeader, CardContent } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';


function PinForm() {
    const dispatch = useDispatch();
    const clickedPin = useSelector((store) => store.mapClickReducer);
    const pins = useSelector((store) => store.pinReducer);
    const [pin, setPin] = useState({
        pin_name: '',
        pin_desc: '',
        latitude: clickedPin.lat,
        longitude: clickedPin.lng,
    })

    useEffect(() => { }, [pins]);

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
        {pins && pins.map((pin, i) => {
            <div classNAme="cardContainer">
                <Card key={i}>
                    <CardHeader title={pin.pin_name} />
                    <CardContent>
                        <p>{pin.pin_desc}</p>
                    </CardContent>
                </Card>
            </div>
        })}
        <br />
        <div className="container">
            <Input
                type="text"
                name="pin_name"
                value={pin.pin_name}
                onChange={(event) => handleChange(event)}
                placeholder="Pin Name"
            ></Input>
            <br />
            <Input
                type="text"
                name="pin_desc"
                value={pin.pin_desc}
                onChange={(event) => handleChange(event)}
                placeholder="Pin Description"
            ></Input>
            <br />
            <Input
                type="text"
                name="latitude"
                value={clickedPin.lat}
                onChange={(event) => handleChange(event)}
                placeholder="Pin Latitude"
            ></Input>
            <br />
            <Input
                type="text"
                name="longitude"
                value={clickedPin.lng}
                onChange={(event) => handleChange(event)}
                placeholder="Pin Longitude"
            ></Input>

            <Button
                onClick={handleClick}
            >Add Another Pin</Button>
        </div>
    </>)
}

export default PinForm;