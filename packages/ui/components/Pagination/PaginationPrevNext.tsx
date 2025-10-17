import "./Pagination.css"

interface PaginationPrevNextProps {
    onPrevClick: () => void,
    onNextClick: () => void,
    currentPage: number,
    totalPages: number,
    rowsPerPage: number
    handleRowsPerPageChange: (pageSelected: string) => void
    className?: string;
}

const pageSizes = [6, 12, 24, 48];

export function PaginationPrevNext({
                                       onPrevClick,
                                       onNextClick,
                                       currentPage,
                                       totalPages,
                                       rowsPerPage,
                                       handleRowsPerPageChange,
                                       className,
                                   }: PaginationPrevNextProps) {
    return (
        <div className={`pagination-container ${className}`}>
            <p className="pagination-status">{currentPage} / {totalPages}</p>
            <div className="pagination-buttons">
                <button onClick={onPrevClick} disabled={currentPage === 1}>Previous Page</button>
                <button onClick={onNextClick} disabled={currentPage === totalPages}>Next Page</button>
            </div>
            <select id="pagination-select" value={rowsPerPage}
                    onChange={(event) => handleRowsPerPageChange(event.target.value)}>
                {pageSizes.map((size) => <option key={size} value={size}>{size}</option>)}
            </select>
        </div>
    )
}
