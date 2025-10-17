import {useEffect, useState} from "react";
import {StationResponse} from "../../type/StationData";

interface UseStationDataReturn {
    stationData: StationResponse | null,
    isLoading: boolean,
    error: string | null,
}

export default function useStationData(): UseStationDataReturn {
    const [data, setData] = useState(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
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
        fetchData();
    }, [])

    return {
        stationData: data,
        isLoading,
        error
    }
}
