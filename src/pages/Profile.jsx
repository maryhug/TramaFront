// src/pages/Profile.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { ProfileHeader } from "../components/feed/ProfileHeader";
import { TabNavigation } from "../components/Header/TabNavigation";
import { ReviewsList } from "../components/feed/ReviewList"; // Asegúrate que el nombre del archivo sea ReviewList.jsx
import { ListsList } from "../components/feed/ListsList";
import { LikesList } from "../components/feed/LikesList";
import { FollowersList } from "../components/feed/FollowersList";
import { FollowingList } from "../components/feed/FollowingList";

export default function Profile() {
    const [activeTab, setActiveTab] = useState("reviews");
    const [reviews, setReviews] = useState([]);
    const userId = localStorage.getItem("userId");

    const userObj = JSON.parse(localStorage.getItem("user"));
    const token = userObj?.token;

    const tabs = [
        { id: "reviews", label: "Reviews" },
        { id: "lists", label: "Lists" },
        { id: "likes", label: "Likes" },
        { id: "followers", label: "Followers" },
        { id: "following", label: "Following" },
    ];

    useEffect(() => {
        if (!userId || !token) return;
        if (activeTab === "reviews") {
            axios.get(`https://tramaback-api.up.railway.app/trama/reviews/user/${userId}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(res => {
                const data = Array.isArray(res.data) ? res.data : (res.data ? [res.data] : []);
                setReviews(
                    data.map(r => ({
                        id: `${r.userId}-${r.movieId}`, // Asegurar ID único si la API no lo garantiza para el frontend
                        movieTitle: r.movieTitle,
                        content: r.content,
                        timeAgo: r.publishedDate,
                        likes: r.likesCount || 0,
                        comments: r.commentsCount || 0,
                        bookmarks: 0, // Ajusta según tu API
                        moviePoster: r.imageUrl,
                        // Añade otros campos que ReviewCard pueda necesitar
                        userAvatar: r.userAvatar, // Ejemplo
                        userName: r.userName, // Ejemplo
                        userId: r.userId, // Para navegación o identificación
                        movieId: r.movieId // Para navegación
                    }))
                );
            })
            .catch(() => setReviews([]));
        }
        // No es necesario cargar datos de otras pestañas aquí,
        // ya que cada componente de lista (ListsList, LikesList, etc.)
        // se encarga de su propia carga de datos en su useEffect.
    }, [userId, token, activeTab]);

    const renderTabContent = () => {
        switch (activeTab) {
            case "reviews":
                // ReviewsList espera que las 'reviews' ya estén formateadas y cargadas
                return <ReviewsList reviews={reviews} />;
            case "lists":
                return <ListsList userId={userId} />;
            case "likes":
                return <LikesList userId={userId} />;
            case "followers":
                return <FollowersList userId={userId} />;
            case "following":
                return <FollowingList userId={userId} />;
            default:
                return <ReviewsList reviews={reviews} />;
        }
    };

    if (!userId) {
        return <div className="text-gray-400 text-center py-8">Debes iniciar sesión para ver tu perfil.</div>;
    }

    if (!token && userId) {
        return <div className="text-red-500 text-center py-8">Error de autenticación. Por favor, inicia sesión de nuevo.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-900">
            <ProfileHeader userId={userId} />
            <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
            {/* El contenido de la pestaña ahora se renderiza dentro de su propio contenedor con padding */}
            <div className="bg-gray-900 py-4"> {/* Asegura que el fondo del contenido también sea oscuro */}
                {renderTabContent()}
            </div>
        </div>
    );
}