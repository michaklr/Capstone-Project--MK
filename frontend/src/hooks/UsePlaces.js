import { useState, useEffect } from "react";
import axios from "axios";

export default function usePlaces() {
  const [places, setPlaces] = useState([]);

  const url = "/api/places";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => response.data)
      .then(setPlaces)
      .catch(console.error);
  }, [url]);

  return { places };
}
