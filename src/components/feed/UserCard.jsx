// src/components/feed/UserCard.jsx
export function UserCard({ user }) {
    return (
        <div className="bg-gray-800 p-3 mb-2 rounded-lg shadow text-white flex items-center space-x-4">
            <img
                src={user.avatar || "/placeholder.svg"} // Usa un placeholder si no hay avatar
                alt={user.name || user.username}
                className="w-12 h-12 rounded-full object-cover"
            />
            <div>
                <h4 className="font-semibold">{user.name || user.username}</h4>
                {/* Podrías añadir un @username o un botón de seguir/dejar de seguir aquí */}
            </div>
        </div>
    );
}