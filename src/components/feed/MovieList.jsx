import { MovieItem } from "./MovieItem"
import React from "react"
import { Link } from "react-router-dom" // Importar Link

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
                            <Link to={`/movies/${movie.id}`} aria-label={`Ver detalles de ${movie.title}`}>
                                <img
                                    src={movie.posterUrl || "/placeholder.svg"} // Usar placeholder si no hay posterUrl
                                    alt={movie.title}
                                    className="w-16 h-24 object-cover rounded"
                                    onError={(e) => {
                                        // Prevenir bucles si el placeholder también falla
                                        e.target.onerror = null;
                                        e.target.src = "/placeholder.svg";
                                    }}
                                />
                            </Link>
                            <div className="flex-1">
                                <Link to={`/movies/${movie.id}`} className="hover:underline">
                                    <span className="font-semibold text-lg">{movie.title}</span>
                                </Link>
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