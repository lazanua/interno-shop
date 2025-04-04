import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Иконка маркера
const markerIcon = new L.Icon({
  iconUrl: "/img/map-component/marker.svg",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const MapComponent = () => {
  return (
    <div className="mb-[200px] rounded-[70px] overflow-hidden">
      <MapContainer
        center={[50.4501, 30.5234]}
        zoom={12.25}
        style={{ height: "501px", width: "100%" }}
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
        />
        <Marker position={[50.4501, 30.5234]} icon={markerIcon}>
          <Popup>
            <div className="text">Interno studio</div>
          </Popup>
        </Marker>
        <Marker position={[50.4509, 30.5089]} icon={markerIcon}>
          <Popup>
            <div className="text">Interno studio</div>
          </Popup>
        </Marker>
        <Marker position={[50.409, 30.5089]} icon={markerIcon}>
          <Popup>
            <div className="text">Interno studio</div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
