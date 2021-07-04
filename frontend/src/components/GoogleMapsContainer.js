import React, { useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import mapStyles from "../common/mapStyles";
import { geolocated } from "react-geolocated";
import LocationMarker from "../components/LocationMarker";

function GoogleMapsContainer(props) {
  const googleLibraries = [];

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    googleLibraries,
  });

  const center = {
    lat: props.coords ? props.coords.latitude : 50.935173,
    lng: props.coords ? props.coords.longitude : 6.953101,
  };

  const mapContainerStyle = {
    width: "80vw",
    height: "80vh",
  };

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading...";

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
      >
        {props.places.map((places) => (
          <LocationMarker key={places.place_id} places={places} />
        ))}
      </GoogleMap>
    </>
  );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
    watchPosition: true,
  },
  userDecisionTimeout: 5000,
})(GoogleMapsContainer);
