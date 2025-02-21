import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const mapRef = useRef(null);
  const [markerPosition, setMarkerPosition] = useState([27.6947, 85.324]); // Initial position in Kathmandu

  useEffect(() => {
    const map = L.map(mapRef.current).setView(markerPosition, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const marker = L.marker(markerPosition).addTo(map);
    marker.bindPopup("Your Location in Kathmandu").openPopup();

    // Function to generate random latitude and longitude within Kathmandu's boundaries
    const generateRandomCoordinates = () => {
      const randomLat = (Math.random() * (27.8216 - 27.5678) + 27.5678).toFixed(
        6
      ); // Latitude between 27.5678 and 27.8216
      const randomLng = (Math.random() * (85.5075 - 85.1847) + 85.1847).toFixed(
        6
      ); // Longitude between 85.1847 and 85.5075
      setMarkerPosition([randomLat, randomLng]);
      marker.setLatLng([randomLat, randomLng]); // Update marker position
    };

    // Update coordinates every 5 seconds
    const intervalId = setInterval(generateRandomCoordinates, 5000);

    // Cleanup function to remove the map and interval on unmount
    return () => {
      map.remove();
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div id="map" ref={mapRef} style={{ width: "90%", height: "500px" }} />
  );
};

export default MapComponent;
