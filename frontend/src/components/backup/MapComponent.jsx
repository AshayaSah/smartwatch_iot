import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const mapRef = useRef(null);
  const [markerPosition, setMarkerPosition] = useState([
    14.0860746, 100.608406,
  ]); // Initial position

  useEffect(() => {
    const map = L.map(mapRef.current).setView(markerPosition, 6);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const marker = L.marker(markerPosition).addTo(map);
    marker.bindPopup("Your Location").openPopup();

    // Function to generate random latitude and longitude
    const generateRandomCoordinates = () => {
      const randomLat = (Math.random() * 180 - 90).toFixed(6); // Latitude between -90 and 90
      const randomLng = (Math.random() * 360 - 180).toFixed(6); // Longitude between -180 and 180
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
