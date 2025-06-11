import { useEffect, useState } from "react"
import { SearchSection } from "../components/layout/SearchSection"
import { ContentTabs } from "../components/layout/ContentTabs"
import { MovieList } from "../components/feed/MovieList"
import { useMovieSearch } from "../hooks/use-movie-search"
import { useUserSearch } from "../hooks/use-user-search"
import { UserSearchResults } from "../components/feed/UserSearchResults"

export default function Movies() {
    const [activeTab, setActiveTab] = useState("movies")
    const [favorites, setFavorites] = useState([])

    const movieSearch = useMovieSearch()
    const userSearch = useUserSearch()

    // Llama a fetchPopularMovies cuando se selecciona la pestaña "top"
    useEffect(() => {
        if (activeTab === "top") {
            movieSearch.fetchPopularMovies()
        }
    }, [activeTab])

    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
        if (tabId === "movies") {
            userSearch.handleSearchClear()
        } else if (tabId === "users") {
            movieSearch.handleSearchClear()
        }
    }

    const toggleFavorite = (movie) => {
        setFavorites((prev) =>
            prev.some((fav) => fav.id === movie.id)
                ? prev.filter((fav) => fav.id !== movie.id)
                : [...prev, movie]
        )
    }

    const currentSearchQuery = activeTab === "movies" ? movieSearch.searchQuery : userSearch.searchQuery
    const currentHandleInputChange = activeTab === "movies" ? movieSearch.handleInputChange : userSearch.handleInputChange
    const currentHandleKeyDown = activeTab === "movies" ? movieSearch.handleKeyDown : userSearch.handleKeyDown
    const currentHandleSearchClear = activeTab === "movies" ? movieSearch.handleSearchClear : userSearch.handleSearchClear
    const isLoading = activeTab === "movies" || activeTab === "top" ? movieSearch.loading : userSearch.loading
    const currentPlaceholder = activeTab === "movies" ? "Buscar películas..." : "Buscar usuarios por nombre..."

    const renderContent = () => {
        switch (activeTab) {
            case "movies":
                return (
                    <>
                        <MovieList
                            movies={movieSearch.movies}
                            title="Películas encontradas"
                            favorites={favorites}
                            onToggleFavorite={toggleFavorite}
                        />
                        {movieSearch.movies.length > 0 && (
                            <div className="flex justify-center items-center space-x-2 mt-4">
                                <button
                                    onClick={async () => await movieSearch.goToPage(movieSearch.page - 1)}
                                    disabled={movieSearch.page === 1}
                                    className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
                                >
                                    Anterior
                                </button>
                                <span className="text-gray-300">
                                    Página {movieSearch.page} de {movieSearch.totalPages}
                                </span>
                                <button
                                    onClick={async () => await movieSearch.goToPage(movieSearch.page + 1)}
                                    disabled={movieSearch.page === movieSearch.totalPages}
                                    className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
                                >
                                    Siguiente
                                </button>
                            </div>
                        )}
                    </>
                )
            case "top":
                return (
                    <>
                        <MovieList
                            movies={movieSearch.movies}
                            title="Películas populares de la semana"
                            favorites={favorites}
                            onToggleFavorite={toggleFavorite}
                        />
                        {movieSearch.movies.length > 0 && (
                            <div className="flex justify-center items-center space-x-2 mt-4">
                                <button
                                    onClick={async () => await movieSearch.goToPage(movieSearch.page - 1)}
                                    disabled={movieSearch.page === 1}
                                    className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
                                >
                                    Anterior
                                </button>
                                <span className="text-gray-300">
                                    Página {movieSearch.page} de {movieSearch.totalPages}
                                </span>
                                <button
                                    onClick={async () => await movieSearch.goToPage(movieSearch.page + 1)}
                                    disabled={movieSearch.page === movieSearch.totalPages}
                                    className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
                                >
                                    Siguiente
                                </button>
                            </div>
                        )}
                    </>
                )
            case "users":
                return (
                    <>
                        {userSearch.error && <div className="text-red-500 mt-2 text-center">{userSearch.error}</div>}
                        {!userSearch.loading && !userSearch.error && userSearch.users.length === 0 && currentSearchQuery && (
                            <div className="text-gray-400 text-center py-8">No se encontraron usuarios.</div>
                        )}
                        <UserSearchResults users={userSearch.users} onClose={userSearch.handleSearchClear} />
                    </>
                )
            default:
                return null
        }
    }

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="max-w-4xl mx-auto px-6 py-8">
                <SearchSection
                    searchQuery={currentSearchQuery}
                    onInputChange={currentHandleInputChange}
                    onKeyDown={currentHandleKeyDown}
                    onSearchClear={currentHandleSearchClear}
                    placeholder={currentPlaceholder}
                />

                <ContentTabs activeTab={activeTab} onTabChange={handleTabChange} />

                <div className="space-y-6">
                    {isLoading ? (
                        <div className="text-gray-400 text-center py-8">
                            {activeTab === "movies" || activeTab === "top"
                                ? "Buscando películas..."
                                : "Buscando usuarios..."}
                        </div>
                    ) : (
                        renderContent()
                    )}
                </div>
            </div>
        </div>
    )
}