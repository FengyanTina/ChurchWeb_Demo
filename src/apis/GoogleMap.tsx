import React from "react";
import GoogleMapReact from 'google-map-react';
import "./map.css";
import RoomIcon from '@mui/icons-material/Room'; // MUI location icon instead of Iconify

interface Location {
  address: string;
  lat: number;
  lng: number;
}

const location: Location = {
    address: "Albanoliden 5, vån 3, 50630 Borås, Sweden",
    lat: 57.72926,
    lng: 12.94032,
  };
  

interface LocationPinProps {
  lat: number;
  lng: number;
  text: string;
}

const LocationPin: React.FC<LocationPinProps> = ({ text }) => (
  <div className="pin">
    <RoomIcon className="pin-icon" /> {/* Replacing with MUI's RoomIcon */}
    <p className="pin-text">{text}</p>
  </div>
);

const MyMap: React.FC = () => {
  return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us </h2>

      <div className="google-map">
        <GoogleMapReact
           bootstrapURLKeys={{ key: "AIzaSyCUlZIr1YkqmKD3Kvu8qFURaIviDn2YbjU" }}
          defaultCenter={location}
          defaultZoom={17}>
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default MyMap;
