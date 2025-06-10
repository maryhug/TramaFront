"use client"

import { useState } from "react"
import { ProfileHeader } from "../components/feed/ProfileHeader"
import { TabNavigation } from "../components/Header/TabNavigation"
import { ReviewsList } from "../components/feed/ReviweList"

export default function Profile() {
    const [activeTab, setActiveTab] = useState("reviews")

    const user = {
        name: "Sophia Bennett",
        bio: "Film enthusiast and critic. Sharing my thoughts on cinema and exploring new stories. Los Angeles, CA · cinematch.com/sophia",
        joinYear: "2021",
        avatar: "/placeholder.svg?height=128&width=128",
    }

    const tabs = [
        { id: "reviews", label: "Reviews" },
        { id: "lists", label: "Lists" },
        { id: "likes", label: "Likes" },
        { id: "followers", label: "Followers" },
        { id: "following", label: "Following" },
    ]

    const reviews = [
        {
            id: 1,
            movieTitle: "The Midnight Serenade",
            content:
                "A hauntingly beautiful film that explores the depths of human connection and the passage of time. The performances are captivating, and the cinematography is breathtaking. A must-see for any lover of art house cinema.",
            timeAgo: "4d",
            likes: 12,
            comments: 3,
            bookmarks: 2,
            moviePoster: "/placeholder.svg?height=144&width=96",
        },
        {
            id: 2,
            movieTitle: "Echoes of the Past",
            content:
                "A gripping thriller with unexpected twists and turns. The plot keeps you on the edge of your seat, and the acting is superb. Highly recommended for fans of suspenseful storytelling.",
            timeAgo: "1w",
            likes: 8,
            comments: 1,
            bookmarks: 1,
            moviePoster: "/placeholder.svg?height=144&width=96",
        },
        {
            id: 3,
            movieTitle: "The Last Horizon",
            content:
                "An epic adventure that takes you on a journey across stunning landscapes and into the hearts of unforgettable characters. The visual effects are groundbreaking, and the story is both inspiring and emotional.",
            timeAgo: "2w",
            likes: 15,
            comments: 5,
            bookmarks: 3,
            moviePoster: "/placeholder.svg?height=144&width=96",
        },
    ]

    const renderTabContent = () => {
        switch (activeTab) {
            case "reviews":
                return <ReviewsList reviews={reviews} />
            case "lists":
                return (
                    <div className="max-w-4xl mx-auto px-6 py-12 text-center text-gray-500">Lists content coming soon...</div>
                )
            case "likes":
                return (
                    <div className="max-w-4xl mx-auto px-6 py-12 text-center text-gray-500">Likes content coming soon...</div>
                )
            case "followers":
                return (
                    <div className="max-w-4xl mx-auto px-6 py-12 text-center text-gray-500">Followers content coming soon...</div>
                )
            case "following":
                return (
                    <div className="max-w-4xl mx-auto px-6 py-12 text-center text-gray-500">Following content coming soon...</div>
                )
            default:
                return <ReviewsList reviews={reviews} />
        }
    }

    return (
        <div className="min-h-screen bg-gray-900">
            <ProfileHeader user={user} />
            <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
            {renderTabContent()}
        </div>
    )
}
