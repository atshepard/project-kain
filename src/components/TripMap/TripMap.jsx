import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function TripMap({ details, pins }) {
  const dispatch = useDispatch();

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
        zoom={10}
        onClick={(event) => dispatch({type: 'SET_LATLNG', payload: event.latLng.toJSON()})}
      >
        { /* Child components, such as markers, info windows, etc. */}
        {pins && pins.map((pin, i) => {

          return (
            <Marker
              onLoad={onLoad}
              position={{ lat: Number(pin.latitude), lng: Number(pin.longitude) }}
            />)
        })}

        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default TripMap;