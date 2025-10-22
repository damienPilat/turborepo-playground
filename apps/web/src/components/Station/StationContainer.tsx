import StationCard from "./StationCard";
import useStationData from "../../hooks/useStationData";
import usePagination from "../../hooks/usePagination";
import {PaginationPrevNext,} from "@repo/ui";
import {useCallback, useEffect, useState} from "react";
import StationSearchBar from "./StationSearchBar";
import "./StationContainer.css";
import StationCardSkeleton from "./StationCardSkeleton";
import {RotateCw} from "lucide-react";
import Filters from "./Filters";
import {Station} from "../../type/StationData";
import MapWithMarkers from "../Map/Map";

export default function StationContainer() {

    const {fetchData, stationData, isLoading, error} = useStationData();

    const [searchResults, setSearchResults] = useState<Station[]>([]);

    const [filteredResults, setFilteredResults] = useState<Station[]>([])

    useEffect(() => {
        if (stationData?.network.stations) {
            setSearchResults(stationData.network.stations);
            setFilteredResults(stationData.network.stations);
        }
    }, [stationData]);

    const hasBikes = useCallback(() => {
        setFilteredResults(searchResults.filter((stationData) => stationData.free_bikes > 0))
    }, [searchResults, setFilteredResults])

    const hasEmptySlots = useCallback(() => {
        setFilteredResults(searchResults.filter((stationData) => stationData.empty_slots > 0))
    }, [searchResults, setFilteredResults])

    const resetSearchResults = useCallback(() => {
        setFilteredResults(stationData?.network.stations || []);
    }, [stationData, setFilteredResults])

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

            <div className="filter-buttons">
                <button onClick={fetchData} className="refetch-data">
                    <RotateCw size={16} strokeWidth={2.5}/>
                    Refetch
                </button>
                <Filters hasBikes={hasBikes} hasEmptySlots={hasEmptySlots} reset={resetSearchResults}/>
            </div>

            <MapWithMarkers stationData={paginatedData}/>

            <div className="station-container">
                {isLoading &&
                    Array.from({length: 6}, (_, index) => (
                        <StationCardSkeleton key={index}/>
                    ))
                }

                {error && <h4>Sorry, could not get station details. Please try again later.</h4>}

                {paginatedData && paginatedData.map((station) =>
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
