"use client"
import { useParams } from "react-router-dom"

import { BackButton } from "../components/Comment/back-button"
import { MoviePoster } from "../components/Movie/movie-poster"
import { MovieInfo } from "../components/Movie/movie-info"
import { MovieActions } from "../components/Movie/movie-actions"
import { useMovieData } from "../hooks/use-movie-data"

export default function MovieDetailsPage() {
    const { id } = useParams()
    const { movie, loading } = useMovieData(id) // Usa el id correcto

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-white text-lg">Loading movie details...</div>
            </div>
        )
    }

    if (!movie) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-white text-lg">Movie not found</div>
            </div>
        )
    }

    const handleWatchTrailer = () => {
        alert("Opening trailer...")
    }

    const handleAddToList = (added) => {
        alert(added ? "Added to your list!" : "Removed from your list!")
    }

    const handleAddToFavorites = (added) => {
        alert(added ? "Added to favorites!" : "Removed from favorites!")
    }

    const handleShare = () => {
        alert("Sharing movie...")
    }

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="max-w-6xl mx-auto px-6 py-8">
                <BackButton className="mb-6" />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Movie Poster */}
                    <div className="lg:col-span-1">
                        <MoviePoster src={movie.poster || movie.posterUrl} alt={movie.title} className="w-full max-w-sm mx-auto" />                    </div>

                    {/* Movie Information */}
                    <div className="lg:col-span-2 space-y-6">
                        <MovieInfo movie={movie} />

                        <MovieActions
                            onWatchTrailer={handleWatchTrailer}
                            onAddToList={handleAddToList}
                            onAddToFavorites={handleAddToFavorites}
                            onShare={handleShare}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
