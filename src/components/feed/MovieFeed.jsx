// components/feed/MovieList.jsx
import Link from "next/link"

export function MovieList({ movies, title }) {
    return (
        <div>
            <h2 className="text-white text-2xl font-semibold mb-4">{title}</h2>
            <ul className="space-y-4">
                {movies.map((movie) => (
                    <li key={movie.id} className="text-white">
                        <Link href={`/movies/${movie.id}`} className="hover:underline text-blue-400">
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
