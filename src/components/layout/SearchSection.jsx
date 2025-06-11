"use client"

import { SearchBar } from "../ui/SearchBar"

export function SearchSection({ searchQuery, onInputChange, onKeyDown, onSearchClear }) {
    return (
        <div className="mb-6">
            <SearchBar
                placeholder="Search movies, shows, people..."
                value={searchQuery}
                onChange={onInputChange}
                onKeyDown={onKeyDown}
                onClear={onSearchClear}
                showClearButton={true}
            />
        </div>
    )
}
