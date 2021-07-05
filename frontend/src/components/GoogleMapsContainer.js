import React, { useEffect } from "react";
import { InfoWindow, GoogleMap, useLoadScript } from "@react-google-maps/api";
import mapStyles from "../common/mapStyles";
import { geolocated } from "react-geolocated";
import LocationMarker from "../components/LocationMarker";
import styled from "styled-components/macro";

function GoogleMapsContainer(props) {
  const googleLibraries = [];

  const [selected, setSelected] = React.useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    googleLibraries,
  });

  const center = {
    lat: props.coords ? props.coords.latitude : 50.935173,
    lng: props.coords ? props.coords.longitude : 6.953101,
  };

  const mapContainerStyle = {
    width: "100vw",
    height: "50vh",
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
          <LocationMarker
            key={places.place_id}
            places={places}
            onClick={() => {
              setSelected(places);
              console.log(places);
            }}
          >
            {selected?.place_id === places.place_id && (
              <InfoWindow>
                <InfoWrapper>
                  <div>
                    <h2>{selected.name}</h2>
                    <p>{selected.vicinity}</p>
                    <p>{selected.rating}</p>
                    <img src={selected.icon} />
                  </div>
                </InfoWrapper>
              </InfoWindow>
            )}{" "}
          </LocationMarker>
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

const InfoWrapper = styled.div`
  h2 {
    font-size: 18px;
  }
`;
