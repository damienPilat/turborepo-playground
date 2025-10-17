import "./StationCard.css";
import {Link} from "lucide-react";


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
                <a className="location-tag" target="_blank"
                   href={`https://www.google.com/maps/search/${latitude}+${longitude}`}>
                    <p>{latitude}, {longitude}</p>
                    <Link size={12}/>
                </a>
            </div>
        )
    };

    const availabilityStyles = (itemsPresent: number) => {
        let styles = "bike-availability-number"
        if (itemsPresent < 4) {
            styles = styles.concat(' ', 'low-availability');
        } else if (itemsPresent < (free_bikes + empty_slots) / 2) {
            styles = styles.concat(' ', 'med-availability')
        } else {
            styles = styles.concat(' ', 'high-availability')
        }
        return styles;
    }

    return (
        <div className="station-card-container">
            <div className="station-card-title">
                <h2>{stationName}</h2>
                {stationLocation()}
            </div>
            <div className="data-container">
                <div className="bike-availability-container">
                    <p className={availabilityStyles(free_bikes)}>
                        {free_bikes}
                    </p>
                    <p>Bikes</p>
                </div>
                <div className="bike-availability-container">
                    <p className={availabilityStyles(empty_slots)}>
                        {empty_slots}
                    </p>
                    <p>Spaces</p>
                </div>
            </div>
        </div>
    )
}
