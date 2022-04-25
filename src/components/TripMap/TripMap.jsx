import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useEffect } from 'react';

function TripMap({ details, pins }) {

  useEffect(() => {
    // console.log('in use effect');
  }, [details, pins]);

  const containerStyle = {
    width: '800px',
    height: '400px'
  };

  const center = {
    lat: Number(details.latitude),
    lng: Number(details.longitude)
  };

  const onLoad = marker => {
    console.log('marker: ', marker)
  }

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_API}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
      >
        { /* Child components, such as markers, info windows, etc. */}
        {pins && pins.map((pin, i) => {

          return (
            <Marker
              onLoad={onLoad}
              label={pin.pin_name}
              position={{ lat: Number(pin.latitude), lng: Number(pin.longitude) }}
            />)
        })}

        <></>
      </GoogleMap>
    </LoadScript>

  )
}

export default TripMap;