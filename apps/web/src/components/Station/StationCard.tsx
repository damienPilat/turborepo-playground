import "./StationCard.css";

interface StationCardProps {
    stationName: string;
    latitude: number;
    longitude: number;
    free_bikes: number;
    empty_slots: number;
}

export default function StationCard({stationName, latitude, longitude, free_bikes, empty_slots}: StationCardProps) {
    const stationLocation = () => {
        return (
            <div className="location-container">
                <p>{latitude}, {longitude}</p>
            </div>
        )
    };

    return (
        <div className="station-card-container">
            <h2>{stationName}</h2>
            {stationLocation()}
            <div className="data-container">
                <div className="bike-availability-container">
                    <p className="bike-availability-number">
                        {free_bikes}
                    </p>
                    <p>Bikes</p>
                </div>
                <div className="bike-availability-container">
                    <p className="bike-availability-number">
                        {empty_slots}
                    </p>
                    <p>Spaces</p>
                </div>
            </div>
        </div>
    )
}
