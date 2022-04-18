import {Card, CardActionArea, CardContent, CardHeader} from '@mui/material';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function TripItem ({trip}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const tripDetails = () => {
        console.log(trip.id);
        // history.push('/details');
        // dispatch({type: 'FETCH_ALL_TRIP_DETAILS', payload: trip.id});
    }

    return(<>
    <Card>
        <CardActionArea
        onClick={tripDetails}
        >
            <CardHeader>{trip.location_name}</CardHeader>

            <CardContent>
            <p>{trip.latitude}, {trip.longitude}</p>  
            <p>{trip.start_date} - {trip.end_date}</p> 
            </CardContent>
        </CardActionArea>
        
    </Card> 
    </>)
}

export default TripItem;