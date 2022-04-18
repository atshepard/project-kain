function TripItem ({trip}) {

    return(<>
        <p>{trip.location_name}</p>
        <p>{trip.latitude}, {trip.longitude}</p>  
        <p>{trip.start_date} - {trip.end_date}</p>  
    </>)
}

export default TripItem;