import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export function MovieItem({ movie, isFavorite, onToggleFavorite }) {
    return (
        <div className="flex items-center justify-between gap-6 py-6 border-b border-b-amber-50 last:border-b-0">
            {/* Corazón */}
            <button
                onClick={() => onToggleFavorite(movie)}
                className="text-2xl focus:outline-none"
                aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
            >
                {isFavorite ? "❤️" : "🤍"}
            </button>

        </div>
    );
}