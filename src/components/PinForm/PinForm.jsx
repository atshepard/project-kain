import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from '@mui/material';


function PinForm () {
    const dispatch = useDispatch();
    const pins = useSelector((store) => store.pinReducer);

    const handleClick = () => {

        //will need to add new pin information to an array, 
        //display that pins information 
        //clear input fields
    }

    return( <>

       <Input
          type="text"
          name="pinName"
          placeholder="Pin Name"
        ></Input>

        <Input
          type="text"
          name="pinDescription"
        //   value={editTrip.location_name}
        //   onChange={(event) => handleChange(event)}
          placeholder="Pin Description"
        ></Input>

        <Input
          type="text"
          name="pinLatitude"
          placeholder="pinLatitude"
        ></Input>

        <Input
          type="text"
          name="pinLongitude"
          placeholder="Pin Longitude"
        ></Input>

        <Button onClick={handleClick}>ADD ANOTHER</Button>
    </>)
}

export default PinForm;