import "./SearchBar.css";
import {Dispatch, SetStateAction} from "react";
import {Search} from "lucide-react";

interface SearchBarProps {
    label?: string;
    value: string;
    setSearchTerm: Dispatch<SetStateAction<string>>
}

export function SearchBar({
                              label,
                              value,
                              setSearchTerm
                          }: SearchBarProps) {
    return (
        <div className="searchBar-container">
            {label && <label htmlFor="station-search">{label} <Search size={20} strokeWidth={4}/></label>}
            <input
                type="text"
                name="station-search"
                id="station-search"
                value={value}
                onChange={(event) => setSearchTerm(event.target.value)}/>
            <button><Search/></button>
        </div>
    )
}
