import {useEffect, useState} from "react";
import {StationResponse} from "../type/StationData";
import useInterval from "./useInterval";

interface UseStationDataReturn {
    fetchData: () => void,
    stationData: StationResponse | null,
    isLoading: boolean,
    error: string | null,
}

export default function useStationData(): UseStationDataReturn {
    const [data, setData] = useState(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://api.citybik.es/v2/networks/santander-cycles')
            if (!response.ok) throw new Error("response not okay");
            const responseData = await response.json();
            setData(responseData)
        } catch (e) {
            if (e instanceof Error) setError(e.message)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    // const debouncedFetchData = useDebounceFunc(fetchData, 3000);

    useInterval(fetchData, 60000)

    return {
        fetchData,
        stationData: data,
        isLoading,
        error
    }
}
