"use client";

import {
  CircleMarker,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const locations = [
  {
    name: "Rouen",
    position: [49.4432, 1.0993] as [number, number],
    description: "Siège et zone principale d'intervention",
    department: "Seine-Maritime · 76",
  },
  {
    name: "Évreux",
    position: [49.0279, 1.1514] as [number, number],
    description: "Interventions dans l'Eure",
    department: "Eure · 27",
  },
  {
    name: "Louviers",
    position: [49.2167, 1.1667] as [number, number],
    description: "Interventions sur rendez-vous",
    department: "Eure · 27",
  },
  {
    name: "Dieppe",
    position: [49.9229, 1.0775] as [number, number],
    description: "Interventions sur rendez-vous",
    department: "Seine-Maritime · 76",
  },
];

const rouenIcon = L.divIcon({
  className: "bs-diag-marker",
  html: `
    <div class="bs-marker">
      <span></span>
    </div>
  `,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
});

const secondaryIcon = L.divIcon({
  className: "bs-diag-marker",
  html: `
    <div class="bs-marker bs-marker-secondary">
      <span></span>
    </div>
  `,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, -10],
});

export function ServiceMap() {
  return (
    <div
      className="relative h-[300px] w-full overflow-hidden rounded-[20px] sm:h-[340px] lg:h-full lg:min-h-[380px]"
      aria-label="Carte interactive de la zone d'intervention de BS Diag"
    >
      <MapContainer
        center={[49.35, 1.1]}
        zoom={9}
        minZoom={8}
        maxZoom={13}
        scrollWheelZoom={false}
        zoomControl={false}
        keyboard={true}
        aria-label="Carte interactive de la Normandie, zone d'intervention BS Diag"
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ZoomControl position="bottomright" />

        {/* Zone principale autour de Rouen */}
        <CircleMarker
          center={[49.4432, 1.0993]}
          radius={45}
          pathOptions={{
            color: "#222",
            fillColor: "#222",
            fillOpacity: 0.035,
            weight: 1,
            opacity: 0.2,
          }}
        />

        {locations.map((location, index) => (
          <Marker
            key={location.name}
            position={location.position}
            icon={index === 0 ? rouenIcon : secondaryIcon}
            title={location.name}
            alt={`Zone d'intervention : ${location.name}`}
          >
            <Popup>
              <div className="min-w-[180px]">
                <p className="text-sm font-semibold text-neutral-900">
                  {location.name}
                </p>

                <p className="mt-1 text-xs text-neutral-500">
                  {location.department}
                </p>

                <p className="mt-2 text-xs leading-5 text-neutral-600">
                  {location.description}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Badge 76 / 27 */}
      <div className="pointer-events-none absolute left-5 top-5 z-[400] flex gap-2">
        <span className="rounded-full bg-[#222] px-3 py-1.5 text-[10px] font-semibold text-white shadow-sm">
          76
        </span>

        <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-neutral-800 shadow-sm">
          27
        </span>
      </div>

      {/* Indication */}
      <div className="pointer-events-none absolute bottom-4 left-4 z-[400] rounded-full border border-white/60 bg-white/90 px-3 py-2 text-[10px] font-medium text-neutral-600 shadow-sm backdrop-blur-md">
        Déplacez la carte pour explorer
      </div>
    </div>
  );
}