import {SearchBar} from "@repo/ui";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import useDebounce from "../hooks/useDebounce";
import {Station, StationResponse} from "../../type/StationData";

interface StationSearchBarProps {
    stationData: StationResponse | null,
    setSearchResults: Dispatch<SetStateAction<Station[]>>
}

export default function StationSearchBar({stationData, setSearchResults}: StationSearchBarProps) {
    const [userSearchStation, setUserSearchStation] = useState('')
    const debouncedUserSearchStation = useDebounce(userSearchStation, 300);

    useEffect(() => {
        if (debouncedUserSearchStation.length > 0) {
            console.log('running debounce w/ ', debouncedUserSearchStation)

            const searchTerm = debouncedUserSearchStation.toLowerCase();
            const filteredStations = stationData?.network.stations.filter(stationData => {
                return stationData.extra.name.toLowerCase().includes(searchTerm)
            })
            setSearchResults(filteredStations || [])
        } else {
            setSearchResults(stationData?.network.stations || [])
        }
    }, [debouncedUserSearchStation, stationData])

    return (
        <SearchBar value={userSearchStation} setSearchTerm={setUserSearchStation}/>
    )
}
