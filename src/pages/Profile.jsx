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

export default function Profile({ currentUser }) {
    const { userId: routeUserId } = useParams();
    const [activeTab, setActiveTab] = useState("reviews");
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = currentUser?.token;
    const currentUserId = currentUser?.id || currentUser?._id;
    const profileUserId = routeUserId || currentUserId;

    useEffect(() => {
        if (!profileUserId || !token) {
            setLoading(false);
            return;
        }
        if (activeTab === "reviews") {
            setLoading(true);
            axios.get(`https://tramaback-api.up.railway.app/trama/reviews/user/${profileUserId}`, {
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
                .catch(() => setReviews([]))
                .finally(() => setLoading(false));
        }
    }, [profileUserId, token, activeTab]);

    const tabs = [
        { id: "reviews", label: "Reviews" },
        { id: "lists", label: "Lists" },
        { id: "likes", label: "Likes" },
        { id: "followers", label: "Followers" },
        { id: "following", label: "Following" },
    ];

    if (!currentUser) {
        return <div className="text-gray-400 text-center py-8">Cargando perfil...</div>;
    }

    if (!token) {
        return <div className="text-gray-400 text-center py-8">Debes iniciar sesión para ver el perfil.</div>;
    }

    if (!profileUserId) {
        return <div className="text-red-500 text-center py-8">Perfil no encontrado.</div>;
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case "reviews":
                return loading
                    ? <div className="text-gray-400 text-center py-8">Cargando...</div>
                    : <ReviewsList reviews={reviews} />;
            case "lists":
                return <ListsList userId={profileUserId} />;
            case "likes":
                return <LikesList userId={profileUserId} />;
            case "followers":
                return <FollowersList userId={profileUserId} />;
            case "following":
                return <FollowingList userId={profileUserId} />;
            default:
                return <ReviewsList reviews={reviews} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-900">
            <ProfileHeader userId={profileUserId} />
            <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="bg-gray-900 py-4">
                {renderTabContent()}
            </div>
        </div>
    );
}