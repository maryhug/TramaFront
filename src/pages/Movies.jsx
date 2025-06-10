"use client"

import { useState } from "react"
import { SearchSection } from "../components/layout/search-section"
import { ContentTabs } from "../components/layout/content-tabs"
import { MovieList } from "../components/feed/movie-list"
import { useMovieSearch } from "../hooks/use-movie-search"

export default function SearchPage() {
    const [activeTab, setActiveTab] = useState("movies")
    const { searchQuery, movies, loading, handleSearchChange, handleSearchClear } = useMovieSearch()

    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }

    const renderContent = () => {
        switch (activeTab) {
            case "movies":
                return <MovieList movies={movies} title="Movies" />
            case "top":
                return <div className="text-gray-400 text-center py-8">Top content coming soon...</div>
            case "users":
                return <div className="text-gray-400 text-center py-8">Users content coming soon...</div>
            default:
                return null
        }
    }

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="max-w-4xl mx-auto px-6 py-8">
                <SearchSection
                    searchQuery={searchQuery}
                    onSearchChange={handleSearchChange}
                    onSearchClear={handleSearchClear}
                />

                <ContentTabs activeTab={activeTab} onTabChange={handleTabChange} />

                <div className="space-y-6">
                    {loading ? <div className="text-gray-400 text-center py-8">Searching...</div> : renderContent()}
                </div>
            </div>
        </div>
    )
}
