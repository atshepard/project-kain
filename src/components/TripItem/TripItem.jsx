import {Card, CardActionArea, CardContent, CardHeader} from '@mui/material';
import {useHistory} from 'react-router-dom';

function TripItem ({trip}) {
    const history = useHistory();

    const tripDetails = () => {
        console.log(trip.id);
        history.push(`/trip/${trip.id}`);
    }

    return(<>
    <Card>
        <CardActionArea
        onClick={tripDetails}
        >
            <CardHeader title={trip.location_name} />

            <CardContent>
            <p>{trip.latitude}, {trip.longitude}</p>  
            <p>{trip.start_date} - {trip.end_date}</p> 
            </CardContent>
        </CardActionArea>
        
    </Card> 
    </>)
}

export default TripItem;