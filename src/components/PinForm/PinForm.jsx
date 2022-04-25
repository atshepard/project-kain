import { useDispatch, useSelector } from "react-redux";
import { Input } from '@mui/material';


function PinForm () {
    const pins = useSelector((store) => store.pinReducer);

    return( <>

       <Input
          type="text"
          name="pinName"
          placeholder="Pin Name"
        ></Input>
        <br />
        <Input
          type="text"
          name="pinDescription"
        //   value={editTrip.location_name}
        //   onChange={(event) => handleChange(event)}
          placeholder="Pin Description"
        ></Input>
        <br />
        <Input
          type="text"
          name="Pin Latitude"
          placeholder="pinLatitude"
        ></Input>
        <br />
        <Input
          type="text"
          name="pinLongitude"
          placeholder="Pin Longitude"
        ></Input>
    </>)
}

export default PinForm;