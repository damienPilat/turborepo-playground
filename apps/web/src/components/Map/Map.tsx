import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {Station} from "../../type/StationData";
import FitMarkersToView from "./FitMarkersToView";
import StationCard from "../Station/StationCard";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapWithMarkers({stationData}: { stationData: Station[] }) {
    return (
        <MapContainer
            center={[51.51381318005832, -0.09833412572686484]}
            zoom={16}
            style={{height: "500px", width: "100%", marginBottom: "24px"}}
        >
            <TileLayer
                attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {stationData.map((station) => (
                <Marker key={station.id} position={[station.latitude, station.longitude]}>
                    <Popup>
                        {/*{station.extra.name}*/}
                        <StationCard
                            stationName={station.extra.name}
                            latitude={station.latitude}
                            longitude={station.longitude}
                            free_bikes={station.free_bikes}
                            empty_slots={station.empty_slots}
                        />
                    </Popup>
                </Marker>
            ))}

            <FitMarkersToView markerData={stationData}/>
        </MapContainer>
    );
}
