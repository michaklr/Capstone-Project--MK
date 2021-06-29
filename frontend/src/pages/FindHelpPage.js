import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import mapStyles from "../common/mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "50vh",
};
const center = {
  lat: 50.935173,
  lng: 6.953101,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function FindHelpPage() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

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
