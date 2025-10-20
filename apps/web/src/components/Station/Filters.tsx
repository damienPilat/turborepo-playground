import "./StationContainer.css"
import {useState} from "react";
import {ListFilter} from "lucide-react";

interface FiltersProps {
    hasBikes: () => void;
    hasEmptySlots: () => void;
    reset: () => void;
}

export default function Filters({hasBikes, hasEmptySlots, reset}: FiltersProps) {
    const [hasBikesClicked, setHasBikesClicked] = useState(false)
    const [hasEmptySlotsClicked, setHasEmptySlotsClicked] = useState(false)

    const handleHasBikesClick = () => {
        if (hasBikesClicked) {
            reset();
            setHasBikesClicked(false)
        } else {
            hasBikes();
            setHasBikesClicked(true);
        }
    }

    const handleHasEmptySlotsClicked = () => {
        if (hasEmptySlotsClicked) {
            reset();
            setHasEmptySlotsClicked(false)
        } else {
            hasEmptySlots();
            setHasEmptySlotsClicked(true);
        }
    }

    return (
        <>
            <ListFilter size={16} strokeWidth={2.5}/>
            <button onClick={handleHasBikesClick} className={hasBikesClicked ? 'filter-selected' : ''}>Has Bikes
            </button>
            <button onClick={handleHasEmptySlotsClicked} className={hasEmptySlotsClicked ? 'filter-selected' : ''}>Has
                Empty Spaces
            </button>
        </>
    )
}
