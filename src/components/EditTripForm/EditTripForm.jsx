function EditTripForm() {


    const dispatch = useDispatch();
    const history = useHistory();
    const editTrip = useSelector((store) => store.editTripReducer);
    const {id} = useParams()
  
    // useEffect(() => {
    //   dispatch({type: 'FETCH_EDIT_TRIP', payload: id})
    // }, [id] )
  
    function handleChange(event, property) {
      dispatch({ 
                  type: 'EDIT_ONCHANGE', 
                  payload: { property: property, value: event.target.value }
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
          value={editTrip.locationName}
          onChange={(event) => handleChange(event, 'location_name')}
          placeholder="Location Name"
        ></Input>

        <Input
          type="text"
          name="latitude"
          placeholder="Latitude"
          value={editTrip.latitude}
          onChange={(event) => handleChange(event, 'latitude')}
        ></Input>

        <Input
          type="text"
          name="longitude"
          placeholder="Longitude"
          value={editTrip.longitude}
          onChange={(event) => handleChange(event, 'longitude')}
        ></Input>

        <Input
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={editTrip.startDate}
          onChange={(event) => handleChange(event, 'start_date')}
        ></Input>

        <Input
          type="date"
          name="endDate"
          placeholder="End Date"
          value={editTrip.endDate}
          onChange={(event) => handleChange(event, 'end_date')}
        ></Input>

        <Button onClick={handleClick}>ADD TRIP</Button>
    </div>
    
    </>)
}

export default EditTripForm;