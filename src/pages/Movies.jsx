"use client"

import { useState } from "react"
import { SearchSection } from "../components/layout/SearchSection"
import { ContentTabs } from "../components/layout/ContentTabs"
import { MovieList } from "../components/feed/MovieList"
import { useMovieSearch } from "../hooks/use-movie-search"

export default function Movies() {
    const [activeTab, setActiveTab] = useState("movies")
    const [favorites, setFavorites] = useState([])
    const {
        searchQuery,
        movies,
        loading,
        page,
        totalPages,
        handleInputChange,
        handleKeyDown,
        handleSearchClear,
        goToPage
    } = useMovieSearch()

    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }

    const toggleFavorite = (movie) => {
        setFavorites((prev) =>
            prev.some((fav) => fav.id === movie.id)
                ? prev.filter((fav) => fav.id !== movie.id)
                : [...prev, movie]
        )
    }

    const renderContent = () => {
        switch (activeTab) {
            case "movies":
                return (
                    <>
                        <MovieList
                            movies={movies}
                            title="Películas encontradas"
                            favorites={favorites}
                            onToggleFavorite={toggleFavorite}
                        />
                        {movies.length > 0 && (
                            <div className="flex justify-center items-center space-x-2 mt-4">
                                <button
                                    onClick={async () => await goToPage(page - 1)}
                                    disabled={page === 1}
                                    className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
                                >
                                    Anterior
                                </button>
                                <span className="text-gray-300">
                                    Página {page} de {totalPages}
                                </span>
                                <button
                                    onClick={async () => await goToPage(page + 1)}
                                    disabled={page === totalPages}
                                    className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
                                >
                                    Siguiente
                                </button>
                            </div>
                        )}
                    </>
                )
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
                    onInputChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onSearchClear={handleSearchClear}
                />

                <ContentTabs activeTab={activeTab} onTabChange={handleTabChange} />

                <div className="space-y-6">
                    {loading ? (
                        <div className="text-gray-400 text-center py-8">Buscando...</div>
                    ) : (
                        renderContent()
                    )}
                </div>
            </div>
        </div>
    )
}