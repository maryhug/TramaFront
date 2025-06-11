import { Badge } from "./badge"
import { Rating } from "./rating"
import { ClockIcon, CalendarIcon } from "../icons/Icons"

export function MovieInfo({ movie }) {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-4xl font-bold text-white mb-2">{movie.title}</h1>
                <div className="flex items-center space-x-4 text-gray-300">
                    <div className="flex items-center space-x-1">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{movie.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>{movie.duration}</span>
                    </div>
                    <Rating rating={movie.rating} />
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {(movie.genres || []).map((genre) => (
                    <Badge key={genre} variant="secondary">
                        {genre}
                    </Badge>
                ))}
            </div>

            <div>
                <h3 className="text-lg font-semibold text-white mb-2">Synopsis</h3>
                <p className="text-gray-300 leading-relaxed">{movie.synopsis}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 className="text-white font-medium mb-2">Director</h4>
                    <p className="text-gray-300">{movie.director}</p>
                </div>
                <div>
                    <h4 className="text-white font-medium mb-2">Writers</h4>
                    <p className="text-gray-300">{Array.isArray(movie.writers) ? movie.writers.join(", ") : ""}</p>                </div>
            </div>
        </div>
    )
}
