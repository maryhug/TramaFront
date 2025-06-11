import { MovieItem } from "./MovieItem"
import React from "react"

export function MovieList({ movies, title, favorites, onToggleFavorite }) {
    if (!movies || movies.length === 0) {
        return <div className="text-gray-400 text-center py-8">No se encontraron películas.</div>
    }

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <ul className="space-y-4">
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <div className="bg-gray-800 p-4 rounded flex items-center space-x-4">
                            {movie.posterUrl && (
                                <img
                                    src={movie.posterUrl}
                                    alt={movie.title}
                                    className="w-16 h-24 object-cover rounded"
                                />
                            )}
                            <div className="flex-1">
                                <span className="font-semibold text-lg">{movie.title}</span>
                                <div className="text-gray-400 text-sm">Director: {movie.director}</div>
                                <div className="text-gray-400 text-sm">Estreno: {movie.releaseDate}</div>
                            </div>
                            <MovieItem
                                movie={movie}
                                isFavorite={favorites.some((fav) => fav.id === movie.id)}
                                onToggleFavorite={onToggleFavorite}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
