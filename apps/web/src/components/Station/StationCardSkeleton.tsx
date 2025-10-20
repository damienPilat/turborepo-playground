import "./StationCardSkeleton.css";

export default function StationCardSkeleton() {

    return (
        <div className="container-skeleton">
            <div className="title-skeleton">
                <div className="name-skeleton"></div>
                <div className="location-skeleton"></div>
            </div>
            <div className="data-container-skeleton">
                <div className="bike-availability-container-skeleton">
                    <p className="bike-count-skeleton">
                        00
                    </p>
                    <p>Bikes</p>
                </div>
                <div className="bike-availability-container-skeleton">
                    <p className="bike-count-skeleton">
                        00
                    </p>
                    <p>Spaces</p>
                </div>
            </div>
        </div>
    )
}
