// src/components/feed/LikedItemCard.jsx
export function LikedItemCard({ item }) {
    return (
        <div className="bg-gray-800 p-3 rounded-lg shadow text-white">
            {item.moviePoster && (
                <img
                    src={item.moviePoster}
                    alt={item.movieTitle || "Poster"}
                    className="w-full h-auto object-cover rounded mb-2 max-h-60" // Limita la altura del poster
                />
            )}
            <h3 className="font-semibold text-lg mb-1">{item.movieTitle || "Título no disponible"}</h3>
            {item.content && (
                <p className="text-sm text-gray-300 truncate">{item.content}</p>
            )}
            {/* Podrías añadir un enlace a la review original o a la película */}
        </div>
    );
}