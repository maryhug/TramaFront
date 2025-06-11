// src/components/feed/ListsList.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { ListCard } from "./ListCard";

export function ListsList({ userId }) {
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!userId) {
            setLoading(false);
            return;
        }

        const fetchLists = async () => {
            setLoading(true);
            setError(null);
            try {
                const userObj = JSON.parse(localStorage.getItem("user"));
                const token = userObj?.token;
                if (!token) throw new Error("Token no encontrado");

                const response = await axios.get(
                    `https://tramaback-api.up.railway.app/trama/lists/user/${userId}`, // Endpoint confirmado
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                const data = Array.isArray(response.data) ? response.data : (response.data ? [response.data] : []);
                setLists(data);
            } catch (err) {
                setError(err.message);
                setLists([]);
            } finally {
                setLoading(false);
            }
        };

        fetchLists();
    }, [userId]);

    if (loading) {
        return <div className="text-white text-center py-4">Cargando listas...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center py-4">Error al cargar listas: {error}</div>;
    }

    if (lists.length === 0) {
        return <div className="text-gray-400 text-center py-4">No hay listas para mostrar.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="px-6 py-6">
                <h2 className="text-2xl font-bold text-white mb-6">Mis Listas</h2>
            </div>
            <div className="divide-y divide-gray-900 px-6">
                {lists.map((list) => (
                    <ListCard key={list.id || list.name} list={list} />
                ))}
            </div>
        </div>
    );
}