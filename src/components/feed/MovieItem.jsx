import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export function MovieItem({ movie }) {
    return (
        <div className="flex items-center justify-between gap-6 py-6 border-b border-b-amber-50 last:border-b-0">
            {/* Contenido del texto */}
            <div className="flex-1">
                <div className="text-gray-400 text-sm mb-1">{movie.year}</div>
                <h3 className="text-white text-lg font-medium mb-1">{movie.title}</h3>
                <div className="text-gray-400 text-sm mb-3">
                    {movie.genre} • {movie.duration}
                </div>
                <Link to="/review">
                    <Button variant="outline" size="sm">
                        Ver review
                    </Button>
                </Link>
            </div>

            {/* Imagen alineada a la derecha con tamaño proporcional */}
            <div className="flex-shrink-0 w-40">
                <img
                    className="w-full h-auto rounded-md object-cover"
                    alt="Poster de la película"
                    src="https://image.tmdb.org/t/p/w500/evvT3HUwoQYoPQXWFO10R6AvhxG.jpg"
                />
            </div>
        </div>
    );
}
