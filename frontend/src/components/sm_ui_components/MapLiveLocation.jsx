import { useState, useEffect, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import "leaflet/dist/leaflet.css";

// Custom hook for getting user location
const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);

  const getUserLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        setError(null);
      },
      (error) => {
        setError(`Error getting location: ${error.message}`);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  useEffect(() => {
    getUserLocation();
  }, [getUserLocation]);

  return { userLocation, error, getUserLocation };
};

const MapLiveLocation = () => {
  const { userLocation, error, getUserLocation } = useUserLocation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Live Location Map</CardTitle>
          <CardDescription>Loading map...</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center h-[400px]">
          <Loader2 className="h-8 w-8 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Location Map</CardTitle>
        <CardDescription>Your current location on the map</CardDescription>
      </CardHeader>
      <CardContent>
        {error ? (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : userLocation ? (
          <div className="h-[400px] w-full rounded-md overflow-hidden relative z-[1]">
            <MapContainer
              center={[userLocation.lat, userLocation.lng]}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
              className="rounded-md"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[userLocation.lat, userLocation.lng]}>
                <Popup>Your live location</Popup>
              </Marker>
            </MapContainer>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[400px] space-y-4">
            <Loader2 className="h-8 w-8 animate-spin" />
            <p className="text-sm text-muted-foreground">
              Fetching your location...
            </p>
          </div>
        )}
      </CardContent>
      {userLocation || !error ? (
        <div className="px-6 pb-4">
          <Button onClick={getUserLocation} className="w-full">
            Refresh Location
          </Button>
        </div>
      ) : null}
    </Card>
  );
};

export default MapLiveLocation;
