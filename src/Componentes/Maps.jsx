import React from 'react'
import { GoogleMap, useJsApiLoader ,Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '450px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBaXTxAB3LssFQeMWkOkiZVdK5sTkZtPlM"
  })

 

 

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}

      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={center} />
      </GoogleMap>
  ) : <></>
}

export default React.memo(Maps)