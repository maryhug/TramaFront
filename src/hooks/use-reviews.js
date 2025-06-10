"use client"

import { useState } from "react"

const mockReviews = [
    {
        id: 1,
        user: {
            name: "Sophia Bennett",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        content:
            "'The Midnight Bloom' is a cinematic masterpiece! The storyline is captivating, and the performances are top-notch. A must-watch for any movie enthusiast.",
        timeAgo: "2 weeks ago",
        likes: 50,
        dislikes: 5,
    },
    {
        id: 2,
        user: {
            name: "Ethan Carter",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 4,
        content:
            "I enjoyed 'The Midnight Bloom', especially the visual effects and the soundtrack. However, the plot was a bit predictable at times.",
        timeAgo: "1 month ago",
        likes: 30,
        dislikes: 10,
    },
    {
        id: 3,
        user: {
            name: "Olivia Davis",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 3,
        content:
            "While 'The Midnight Bloom' had some good moments, it didn't quite live up to the hype. The pacing felt off, and some scenes dragged on.",
        timeAgo: "2 months ago",
        likes: 20,
        dislikes: 15,
    },
]

const mockRatingData = {
    averageRating: 4.5,
    totalReviews: 125,
    ratingDistribution: [
        { stars: 5, percentage: 40 },
        { stars: 4, percentage: 30 },
        { stars: 3, percentage: 15 },
        { stars: 2, percentage: 10 },
        { stars: 1, percentage: 5 },
    ],
}

export function useReviews() {
    const [reviews] = useState(mockReviews)
    const [ratingData] = useState(mockRatingData)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages] = useState(3)

    return {
        reviews,
        ratingData,
        currentPage,
        totalPages,
        setCurrentPage,
    }
}
