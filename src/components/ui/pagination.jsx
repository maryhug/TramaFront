"use client"

export function Pagination({ currentPage, totalPages, onPageChange }) {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1)
        }
    }

    const getVisiblePages = () => {
        const pages = []
        const maxVisible = 5

        let start = Math.max(1, currentPage - Math.floor(maxVisible / 2))
        const end = Math.min(totalPages, start + maxVisible - 1)

        if (end - start + 1 < maxVisible) {
            start = Math.max(1, end - maxVisible + 1)
        }

        for (let i = start; i <= end; i++) {
            pages.push(i)
        }

        return pages
    }

    return (
        <div className="flex items-center justify-center space-x-2 mt-8">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="p-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronLeftIcon className="w-5 h-5" />
            </button>

            {getVisiblePages().map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-2 text-sm rounded-md transition-colors ${
                        currentPage === page ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="p-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronRightIcon className="w-5 h-5" />
            </button>
        </div>
    )
}

function ChevronLeftIcon({ className }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    )
}

function ChevronRightIcon({ className }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    )
}
