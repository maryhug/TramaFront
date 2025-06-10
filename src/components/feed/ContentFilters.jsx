export function ContentFilters() {
    const filters = [
        { label: "Películas", active: true, color: "bg-red-100 text-red-700" },
        { label: "Series", active: false, color: "bg-gray-100 text-gray-700" },
        { label: "New", active: false, color: "bg-gray-100 text-gray-700" },
        { label: "Top", active: false, color: "bg-gray-100 text-gray-700" },
    ]

    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
                {filters.map((filter, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            filter.active ? filter.color : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {filter.label}
                    </button>
                ))}
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                    </svg>
                </button>
            </div>

            <button className="p-2 hover:bg-gray-100 rounded-lg">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                </svg>
            </button>
        </div>
    )
}
