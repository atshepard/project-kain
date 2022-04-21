import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ImageList, ImageListItem } from "@mui/material";
import { useEffect } from "react";
import moment from "moment";


function TripDetails() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const details = useSelector((store) => store.detailsReducer);
    const media = useSelector((store) => store.mediaReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_TRIP_DETAILS', payload: id });
        dispatch({ type: 'FETCH_TRIP_MEDIA', payload: id });
    }, []);

    const startDate = moment(details.start_date).format("MMM Do YY");
    const endDate = moment(details.end_date).format("MMM Do YY");

    // console.log('LOGGING THE DETAILS', details)
    return (<>

        <h1>Your trip to {details.location_name}</h1>
        <br />
        <h3>From {startDate} to {endDate}</h3>
        <br />
        <div className="imgContainer">
            <ImageList cols={2}>
                {media.map((item) => (

                    <ImageListItem key={item.id}>
                        <img height="10%" width="10%" src={`${item.link}`} />
                    </ImageListItem>

                ))}
            </ImageList>
        </div>
    </>)
}

export default TripDetails;
