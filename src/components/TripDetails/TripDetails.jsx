import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function TripDetails () {
    let trip = useParams();
    const dispatch = useDispatch();
    // const details = useSelector(store => store.detailsReducer);

    useEffect(() => {
        dispatch({type: 'FETCH_TRIP_DETAILS', payload: trip.id});
    }, [])

    return(<>
    <h1>ID: {trip.id} </h1>
    </>)
}

export default TripDetails;
