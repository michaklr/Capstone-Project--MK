import { Marker } from "@react-google-maps/api";
import React from "react";

export default function LocationMarker({ places, onClick, children }) {
  return (
    <Marker
      position={{
        lat: places.geometry.location.lat,
        lng: places.geometry.location.lng,
      }}
      onClick={onClick}
    >
      {children}
    </Marker>
  );
}
