// src/components/feed/LikesList.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { LikedItemCard } from "./LikedItemCard";

export function LikesList({ userId }) {
    const [likedItems, setLikedItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!userId) {
            setLoading(false);
            return;
        }

        const fetchLikedItems = async () => {
            setLoading(true);
            setError(null);
            try {
                const userObj = JSON.parse(localStorage.getItem("user"));
                const token = userObj?.token;
                if (!token) throw new Error("Token no encontrado");

                const response = await axios.get(
                    `https://tramaback-api.up.railway.app/trama/review-likes/user/${userId}/liked-reviews`, // Endpoint actualizado
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                const data = Array.isArray(response.data) ? response.data : (response.data ? [response.data] : []);
                // Asumiendo que la respuesta es una lista de reviews a las que se les dio like.
                // Ajusta el mapeo según la estructura de datos devuelta por este nuevo endpoint.
                setLikedItems(data.map(item => ({
                    // Es posible que la estructura del 'item' sea directamente la de una review.
                    // Ajusta los campos según lo que devuelva la API.
                    id: item.id || `${item.userId}-${item.movieId}-${Math.random()}`, // El ID de la review
                    movieTitle: item.movieTitle || "Título no disponible",
                    content: item.content || "Contenido no disponible", // Contenido de la review
                    moviePoster: item.imageUrl || "/placeholder.svg", // Poster de la película de la review
                    // ... otros campos relevantes de la review
                })));
            } catch (err) {
                setError(err.message);
                setLikedItems([]);
            } finally {
                setLoading(false);
            }
        };

        fetchLikedItems();
    }, [userId]);

    if (loading) {
        return <div className="text-white text-center py-4">Cargando "Me gusta"...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center py-4">Error al cargar "Me gusta": {error}</div>;
    }

    if (likedItems.length === 0) {
        return <div className="text-gray-400 text-center py-4">No hay "Me gusta" para mostrar.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="px-6 py-6">
                <h2 className="text-2xl font-bold text-white mb-6">Me Gusta</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6">
                {likedItems.map((item) => (
                    <LikedItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}