import { useState, useEffect } from "react"
import axios from "axios"
import { ProfileHeader } from "../components/feed/ProfileHeader"
import { TabNavigation } from "../components/Header/TabNavigation"
import { ReviewsList } from "../components/feed/ReviweList"

export default function Profile() {
    const [activeTab, setActiveTab] = useState("reviews")
    const [reviews, setReviews] = useState([])
    const userId = localStorage.getItem("userId")

    // Obtener token del usuario autenticado
    const userObj = JSON.parse(localStorage.getItem("user"))
    const token = userObj?.token

    const tabs = [
        { id: "reviews", label: "Reviews" },
        { id: "lists", label: "Lists" },
        { id: "likes", label: "Likes" },
        { id: "followers", label: "Followers" },
        { id: "following", label: "Following" },
    ]

    useEffect(() => {
        if (!userId || !token) return
        // Traer reseñas con token
        axios.get(`https://tramaback-api.up.railway.app/trama/reviews/user/${userId}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                const data = Array.isArray(res.data) ? res.data : [res.data]
                setReviews(
                    data.map(r => ({
                        id: `${r.userId}-${r.movieId}`,
                        movieTitle: r.movieTitle,
                        content: r.content,
                        timeAgo: r.publishedDate,
                        likes: 0,
                        comments: 0,
                        bookmarks: 0,
                        moviePoster: r.imageUrl
                    }))
                )
            })
            .catch(() => setReviews([]))
    }, [userId, token])

    const renderTabContent = () => {
        switch (activeTab) {
            case "reviews":
                return <ReviewsList reviews={reviews} />
            default:
                return <ReviewsList reviews={reviews} />
        }
    }

    if (!userId) {
        return <div className="text-gray-400 text-center py-8">Debes iniciar sesión para ver tu perfil.</div>
    }

    return (
        <div className="min-h-screen bg-gray-900">
            <ProfileHeader userId={userId} />
            <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
            {renderTabContent()}
        </div>
    )
}