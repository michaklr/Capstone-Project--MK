import { Marker } from "@react-google-maps/api";
import { useHistory } from "react-router-dom";

export default function LocationMarker({ places }) {
  const history = useHistory();

  const handleMarkerClick = () => {
    history.push("places/" + places.place_id);
  };

  return (
    <Marker
      position={{
        lat: places.geometry.location.lat,
        lng: places.geometry.location.lng,
      }}
      onClick={handleMarkerClick}
    />
  );
}
