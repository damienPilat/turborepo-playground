import {Dispatch, SetStateAction, useEffect, useMemo, useState} from "react";

interface UsePaginationReturn {
    paginatedData: any[],
    currentPage: number,
    totalPages: number,
    setCurrentPage: Dispatch<SetStateAction<number>>
    rowsPerPage: number,
    setRowsPerPage: Dispatch<SetStateAction<number>>
}

const defaultRowsPerPage = 5;

export default function usePagination(data: any[], elPerPage?: number): UsePaginationReturn {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(elPerPage ?? defaultRowsPerPage)

    useEffect(() => {
        setCurrentPage(1);
    }, [rowsPerPage]);

    const totalPages = useMemo(() => (
        Math.ceil(data.length / rowsPerPage)
    ), [data.length, rowsPerPage]);

    const paginatedData = useMemo(() => (
        data.slice(
            (currentPage - 1) * rowsPerPage,
            (currentPage * rowsPerPage)
        )
    ), [currentPage, data, rowsPerPage])

    return {
        paginatedData,
        currentPage,
        totalPages,
        setCurrentPage,
        rowsPerPage,
        setRowsPerPage
    }
}
