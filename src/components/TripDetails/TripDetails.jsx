import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";


function TripDetails () {
    let id = useParams();
    const dispatch = useDispatch();
    const details = useSelector((store) => store.detailsReducer);

    useEffect(() => {
        dispatch({type: 'FETCH_TRIP_DETAILS', payload: id});
    }, []);

    const startDate = moment(details.start_date).format("MMM Do YY");
    const endDate = moment(details.end_date).format("MMM Do YY");

    // console.log('LOGGING THE DETAILS', details)
    return(<>

    <h1>Your trip to {details.location_name}</h1>
    <h3>From {startDate} to {endDate}</h3>


    </>)
}

export default TripDetails;
