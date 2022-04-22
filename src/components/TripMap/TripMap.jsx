import react from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


function TripMap({details, pins}) {

    const containerStyle = {
        width: '400px',
        height: '400px'
      };
      
      const center = {
        lat: Number(details.latitude),
        lng: Number(details.longitude)
      };

      const onLoad = marker => {
        console.log('marker: ', marker)
      }
      
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
          {pins &&  pins.map((pin, i) => {

                return(
                <Marker 
                onLoad={onLoad}
                position={{lat: Number(pin.latitude), lng: Number(pin.longitude)}}
                />)
            })}

          <></>
        </GoogleMap>
      </LoadScript>
      
      )
}

export default TripMap;