import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ImageList, ImageListItem, Box, Modal, Typography, Button } from "@mui/material";
import { Share } from "@mui/icons-material";
import TripMap from '../TripMap/TripMap';
import { useEffect, useState } from "react";
import moment from "moment";
import UserForm from "../UserForm/UserForm";


function TripDetails() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const details = useSelector((store) => store.detailsReducer);
    const media = useSelector((store) => store.mediaReducer);
    const pins = useSelector((store) => store.pinsReducer);
    const user = useSelector((store) => store.user);
    const friends = useSelector((store) => store.friendReducer).filter(friend => friend.id != user.id);

    useEffect(() => {
        dispatch({ type: 'FETCH_TRIP_DETAILS', payload: id });
        dispatch({ type: 'FETCH_TRIP_MEDIA', payload: id });
        dispatch({ type: 'FETCH_TRIP_PINS', payload: id })
    }, []);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#dddddd',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      
    const startDate = moment(details.start_date).format("MMM Do YY");
    const endDate = moment(details.end_date).format("MMM Do YY");

    // console.log('LOGGING THE DETAILS', details)
    // console.log('logging pins', pins)
    return (<>

        <h1>Your trip to {details.location_name}</h1>
        <br />
        <h3>From {startDate} to {endDate}</h3>
        <br />
        <Button variant="outlined" color="error" startIcon={<Share />} onClick={handleOpen}>
            SHARE
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Share this trip with your friends:
                </Typography>
                <UserForm friends={friends} />
            </Box>
        </Modal>
        <br />
        <TripMap
            details={details}
            pins={pins}
        />
        <br />
        {/* {pins.map((pin) => {
            return(<p key={pin.id}>{pin.pin_name}, {pin.pin_desc}, {pin.latitude}, {pin.longitude}</p>)
        })} */}
        <br />
        {media && <div className="imgContainer">
            <ImageList cols={2}>
                {media.map((item) => (

                    <ImageListItem key={item.id}>
                        <img height="10%" width="10%" src={`${item.link}`} />
                    </ImageListItem>

                ))}
            </ImageList>
        </div>}
        <br />
    </>)
}

export default TripDetails;
