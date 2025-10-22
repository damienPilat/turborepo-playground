import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapWithMarkers() {
    return (
        <MapContainer
            center={[40.7128, -74.006]} // New York City
            zoom={13}
            style={{height: "100vh", width: "100%"}}
        >
            <TileLayer
                attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[40.7128, -74.006]}>
                <Popup>Hello from NYC!</Popup>
            </Marker>
        </MapContainer>
    );
}
