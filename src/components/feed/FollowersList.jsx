// src/components/feed/FollowersList.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { UserCard } from "./UserCard";

export function FollowersList({ userId }) {
    const [followers, setFollowers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!userId) {
            setLoading(false);
            return;
        }

        const fetchFollowers = async () => {
            setLoading(true);
            setError(null);
            try {
                const userObj = JSON.parse(localStorage.getItem("user"));
                const token = userObj?.token;
                if (!token) throw new Error("Token no encontrado");

                const response = await axios.get(
                    `https://tramaback-api.up.railway.app/trama/followers/followers/${userId}`, // Endpoint corregido
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                const data = Array.isArray(response.data) ? response.data : (response.data ? [response.data] : []);
                setFollowers(data);
            } catch (err) {
                setError(err.message);
                setFollowers([]);
            } finally {
                setLoading(false);
            }
        };

        fetchFollowers();
    }, [userId]);

    if (loading) {
        return <div className="text-white text-center py-4">Cargando seguidores...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center py-4">Error al cargar seguidores: {error}</div>;
    }

    if (followers.length === 0) {
        return <div className="text-gray-400 text-center py-4">No tienes seguidores.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="px-6 py-6">
                <h2 className="text-2xl font-bold text-white mb-6">Seguidores</h2>
            </div>
            <div className="divide-y divide-gray-700 px-6">
                {followers.map((follower) => (
                    <UserCard key={follower.id || follower.username} user={follower} />
                ))}
            </div>
        </div>
    );
}