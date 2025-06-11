// src/components/feed/FollowingList.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { UserCard } from "./UserCard";

export function FollowingList({ userId }) {
    const [following, setFollowing] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!userId) {
            setLoading(false);
            return;
        }

        const fetchFollowing = async () => {
            setLoading(true);
            setError(null);
            try {
                const userObj = JSON.parse(localStorage.getItem("user"));
                const token = userObj?.token;
                if (!token) throw new Error("Token no encontrado");

                const response = await axios.get(
                    `https://tramaback-api.up.railway.app/trama/followers/following/${userId}`, // Endpoint corregido
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                const data = Array.isArray(response.data) ? response.data : (response.data ? [response.data] : []);
                setFollowing(data);
            } catch (err) {
                setError(err.message);
                setFollowing([]);
            } finally {
                setLoading(false);
            }
        };

        fetchFollowing();
    }, [userId]);

    if (loading) {
        return <div className="text-white text-center py-4">Cargando usuarios seguidos...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center py-4">Error al cargar usuarios seguidos: {error}</div>;
    }

    if (following.length === 0) {
        return <div className="text-gray-400 text-center py-4">No sigues a nadie.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="px-6 py-6">
                <h2 className="text-2xl font-bold text-white mb-6">Siguiendo</h2>
            </div>
            <div className="divide-y divide-gray-700 px-6">
                {following.map((user) => (
                    <UserCard key={user.id || user.username} user={user} />
                ))}
            </div>
        </div>
    );
}