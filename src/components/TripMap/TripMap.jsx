import react from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function TripMap({details, pins}) {

    const containerStyle = {
        width: '400px',
        height: '400px'
      };
      
      const center = {
        lat: Number(details.latitude),
        lng: Number(details.longitude)
      };

      console.log(details);
    return(
    <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
      
      )
}

export default TripMap;