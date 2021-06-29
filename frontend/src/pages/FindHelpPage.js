import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import mapStyles from "../common/mapStyles";
import { geolocated } from "react-geolocated";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "50vh",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

function FindHelpPage(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const center = {
    lat: props.coords ? props.coords.latitude : 50.935173,
    lng: props.coords ? props.coords.longitude : 6.953101,
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
      ></GoogleMap>
    </div>
  );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
    watchPosition: true,
  },
  userDecisionTimeout: 5000,
})(FindHelpPage);
