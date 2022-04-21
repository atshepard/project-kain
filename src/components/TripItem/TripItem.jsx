import { Card, CardActions, CardActionArea, CardContent, CardHeader, Button } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import axios from 'axios';

function TripItem({ trip }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const startDate = moment(trip.start_date).format("MMM Do YY");
    const endDate = moment(trip.end_date).format("MMM Do YY");


    const tripDetails = () => {
        console.log(trip.id);
        history.push(`/trip/${trip.id}`);
    }

    const handleEdit = () => {
    // console.log('you clicked the edit button for trip: ', trip.id);
        dispatch({type: 'SET_EDIT_TRIP', payload: trip});
        history.push(`/edit/${trip.id}`)
    }

    const handleDelete = () => {
    // console.log('you clicked the delete button for trip: ', trip.id);
    swal({
        title: "Are you sure?",
        text: "Deleting this trip will delete the associated pins and media as well!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! The trip is gone!", {
            icon: "success",
          });

          axios.delete(`/api/trip/${trip.id}`)
          .then(response => {
              console.log(response)
              history.push('/user')
          })
          .catch(error => {
              console.log('error deleting trip, ', trip.id, error)
          })

        } else {
          swal("Your trip details are safe!");
        }
      });
    }

    return (<>
    <div className="cardContainer">
        <Card>
            <CardActionArea
                onClick={tripDetails}
            >
                <CardHeader title={trip.location_name} />

                <CardContent>
                    <p>{trip.latitude}, {trip.longitude}</p>
                    <p>{startDate} - {endDate}</p>
                </CardContent>
                </CardActionArea>
            <CardActions>
            <Button variant="outlined" color="success" startIcon={<Edit />} onClick={handleEdit}>
                EDIT
            </Button>

            <Button variant="outlined" color="error" startIcon={<Delete />} onClick={handleDelete}>
                DELETE
            </Button>
            </CardActions>
        </Card>
    </div>
    </>)
}

export default TripItem;