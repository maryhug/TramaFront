// src/components/feed/ListCard.jsx
export function ListCard({ list }) {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow text-white mb-4">
            <h3 className="text-xl font-semibold mb-2">{list.name || "Lista sin nombre"}</h3>
            <p className="text-xs text-gray-500">{list.movieCount} películas</p>
            {/* Ejemplo: <p className="text-sm text-gray-400">{list.description}</p> */}
            {/* Ejemplo: <p className="text-xs text-gray-500">{list.movieCount} películas</p> */}
        </div>
    );
}