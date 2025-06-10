import { MovieItem } from "./movie-item"

export function MovieList({ movies, title }) {
    return (
        <div className="space-y-0">
            {title && <h2 className="text-xl font-semibold text-white mb-6">{title}</h2>}
            <div className="divide-y divide-gray-800">
                {movies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}
