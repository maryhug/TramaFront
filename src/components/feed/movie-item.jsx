import { MoviePoster } from "../ui/movie-poster"

export function MovieItem({ movie }) {
    return (
        <div className="flex items-center justify-between py-6 border-b border-gray-800 last:border-b-0">
            <div className="flex-1">
                <div className="text-gray-400 text-sm mb-1">{movie.year}</div>
                <h3 className="text-white text-lg font-medium mb-1">{movie.title}</h3>
                <div className="text-gray-400 text-sm">
                    {movie.genre} • {movie.duration}
                </div>
            </div>
            <div className="ml-6">
                <MoviePoster src={movie.poster} alt={movie.title} className="w-24 h-36" />
            </div>
        </div>
    )
}
