import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Button, Input } from '@mui/material';
import swal from 'sweetalert';
import axios from 'axios';
import moment from 'moment';


function EditTripForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const editTrip = useSelector((store) => store.editTripReducer);
    const {id} = useParams()
  
    // useEffect(() => {
    //   dispatch({type: 'FETCH_EDIT_TRIP', payload: id})
    // }, [id] )
  
    function handleChange(event) {
      dispatch({ 
                  type: 'EDIT_ONCHANGE', 
                  payload: { property: event.target.name, value: event.target.value }
              });
    }
  
    // Called when the submit button is pressed
    function handleClick() {
    //   event.preventDefault();
      console.log(editTrip)
  
    //   axios.put(`/trip/${editTrip.id}`, editTrip)
    //       .then( response => {
    //           // clean up reducer data            
    //           dispatch({ type: 'EDIT_CLEAR' });
  
    //           // refresh will happen with useEffect on Home
    //           history.push('/user'); // back to list
    //       })
    //       .catch(error => {
    //           console.log('error on PUT: ', error);
    //       })
      
    };
  
    return(<>
    <div className="container">
        <Input
          type="text"
          name="locationName"
          value={editTrip.location_name}
          onChange={(event) => handleChange(event)}
          placeholder="Location Name"
        ></Input>

        <Input
          type="text"
          name="latitude"
          placeholder="Latitude"
          value={editTrip.latitude}
          onChange={(event) => handleChange(event)}
        ></Input>

        <Input
          type="text"
          name="longitude"
          placeholder="Longitude"
          value={editTrip.longitude}
          onChange={(event) => handleChange(event)}
        ></Input>

        <Input
          type="date"
          name="start_date"
          placeholder="Start Date"
          value={moment(editTrip.start_date).format('YYYY-MM-DD')}
          onChange={(event) => handleChange(event)}
        ></Input>

        <Input
          type="date"
          name="end_date"
          placeholder="End Date"
          value={moment(editTrip.end_date).format('YYYY-MM-DD')}
          onChange={(event) => handleChange(event)}
        ></Input>

        <Button onClick={handleClick}>ADD TRIP</Button>
    </div>
    
    </>)
}

export default EditTripForm;