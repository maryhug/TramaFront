import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProfileHeader } from "../components/feed/ProfileHeader";
import { TabNavigation } from "../components/Header/TabNavigation";
import { ReviewsList } from "../components/feed/ReviewList";
import { ListsList } from "../components/feed/ListsList";
import { LikesList } from "../components/feed/LikesList";
import { FollowersList } from "../components/feed/FollowersList";
import { FollowingList } from "../components/feed/FollowingList";

export default function Profile() {
    const { userId: routeUserId } = useParams();
    const [activeTab, setActiveTab] = useState("reviews");
    const [reviews, setReviews] = useState([]);

    // Si hay userId en la ruta, úsalo; si no, usa el del localStorage (perfil propio)
    const userId = routeUserId || localStorage.getItem("userId");
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
                            id: `${r.userId}-${r.movieId}`,
                            movieTitle: r.movieTitle,
                            content: r.content,
                            timeAgo: r.publishedDate,
                            likes: r.likesCount || 0,
                            comments: r.commentsCount || 0,
                            bookmarks: 0,
                            moviePoster: r.imageUrl,
                            userAvatar: r.userAvatar,
                            userName: r.userName,
                            userId: r.userId,
                            movieId: r.movieId
                        }))
                    );
                })
                .catch(() => setReviews([]));
        }
        // Los otros tabs cargan sus datos en sus propios componentes
    }, [userId, token, activeTab]);

    const renderTabContent = () => {
        switch (activeTab) {
            case "reviews":
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
        return <div className="text-gray-400 text-center py-8">Debes iniciar sesión para ver el perfil.</div>;
    }

    if (!token && userId) {
        return <div className="text-red-500 text-center py-8">Error de autenticación. Por favor, inicia sesión de nuevo.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-900">
            <ProfileHeader userId={userId} />
            <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="bg-gray-900 py-4">
                {renderTabContent()}
            </div>
        </div>
    );
}