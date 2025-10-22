import {useEffect, useMemo} from 'react';
import {useMap} from 'react-leaflet';
import L, {LatLngBounds, LatLngExpression} from 'leaflet'
import {Station} from "../../type/StationData";


interface FitMarkersToViewProps {
    markerData: Station[];
}

export default function FitMarkersToView({markerData}: FitMarkersToViewProps) {
    const map = useMap();

    const bounds: LatLngBounds | null = useMemo(() => {
        if (!markerData || markerData.length === 0) {
            return null;
        }

        const latLngs: LatLngExpression[] = markerData.map(d => [d.latitude, d.longitude]);

        return L.latLngBounds(latLngs)
    }, [markerData]);

    useEffect(() => {
        if (bounds) {
            map.fitBounds(bounds, {
                padding: [50, 50],
                maxZoom: 15
            })
        }
    }, [map, bounds])

    return null;
}
