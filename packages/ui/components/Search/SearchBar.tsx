import "./SearchBar.css";
import {Dispatch, SetStateAction} from "react";

interface SearchBarProps {
    value: string;
    setSearchTerm: Dispatch<SetStateAction<string>>
}

export function SearchBar({
                              value,
                              setSearchTerm
                          }: SearchBarProps) {
    return (
        <div className="searchBar-container">
            <label htmlFor="station-search">Search Stations</label>
            <input
                type="text"
                name="station-search"
                id="station-search"
                value={value}
                onChange={(event) => setSearchTerm(event.target.value)}/>
        </div>
    )
}
