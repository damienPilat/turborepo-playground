import StationCard from "./StationCard";
import useStationData from "../hooks/useStationData";

export default function StationContainer () {
    const {stationData, isLoading, error} = useStationData();

    return (
        <div className="station-container">
            {isLoading && <p>Fetching Stations</p>}
            {error && <p>Could not get data</p>}
            {stationData && stationData.network.stations.map((station) =>
                <StationCard
                    stationName={station.extra.name}
                    latitude={station.latitude}
                    longitude={station.longitude}
                    free_bikes={station.free_bikes}
                    empty_slots={station.empty_slots}
                />
            )}
        </div>
    )
}
