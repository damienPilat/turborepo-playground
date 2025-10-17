import StationCard from "./StationCard";
import useStationData from "../hooks/useStationData";
import usePagination from "../hooks/usePagination";
import {PaginationPrevNext,} from "@repo/ui";
import {useState} from "react";
import StationSearchBar from "./StationSearchBar";
import "./StationContainer.css";

export default function StationContainer() {

    const {stationData, isLoading, error} = useStationData();

    const [searchResults, setSearchResults] = useState(stationData?.network.stations || []);

    const {
        paginatedData,
        currentPage,
        totalPages,
        setCurrentPage,
        rowsPerPage,
        setRowsPerPage
    } = usePagination(searchResults, 6);

    return (
        <>
            <StationSearchBar stationData={stationData} setSearchResults={setSearchResults}/>

            <div className="station-container">
                {isLoading && <p>Fetching Stations</p>}
                {error && <p>Could not get data</p>}
                {stationData && paginatedData.map((station) =>
                    <StationCard
                        key={station.id}
                        stationName={station.extra.name}
                        latitude={station.latitude}
                        longitude={station.longitude}
                        free_bikes={station.free_bikes}
                        empty_slots={station.empty_slots}
                    />
                )}
            </div>

            <PaginationPrevNext
                className="station-pagination"
                onPrevClick={() => setCurrentPage((prevPage) => prevPage - 1)}
                onNextClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                currentPage={currentPage}
                totalPages={totalPages}
                rowsPerPage={rowsPerPage}
                handleRowsPerPageChange={(pageSelected) => setRowsPerPage(Number(pageSelected))}
            />
        </>
    )
}
