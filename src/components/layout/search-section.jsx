"use client"

import { SearchBar } from "../ui/search-bar"

export function SearchSection({ searchQuery, onSearchChange, onSearchClear }) {
    return (
        <div className="mb-6">
            <SearchBar
                placeholder="Search movies, shows, people..."
                value={searchQuery}
                onChange={onSearchChange}
                onClear={onSearchClear}
                showClearButton={true}
            />
        </div>
    )
}
