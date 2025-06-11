"use client"

import { useState } from "react"

const mockComments = [
    {
        id: 1,
        user: {
            name: "Sophia Carter",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
            "I'm so excited for this movie! The trailer looks amazing, and I can't wait to see what the director has in store for us.",
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        likes: 12,
        replies: 4,
        shares: 1,
    },
    {
        id: 2,
        user: {
            name: "Ethan Bennett",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        content: "I agree! The visuals are stunning, and the cast seems perfect for their roles.",
        timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
        likes: 8,
        replies: 1,
        shares: 0,
    },
    {
        id: 3,
        user: {
            name: "Olivia Hayes",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
            "I'm a bit skeptical, but I'm hoping it lives up to the hype. The director's previous work has been hit or miss.",
        timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000), // 18 hours ago
        likes: 3,
        replies: 0,
        shares: 0,
    },
    {
        id: 4,
        user: {
            name: "Liam Walker",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
            "I'm not familiar with the source material, but I'm intrigued by the premise. It sounds like a fresh take on the genre.",
        timestamp: new Date(Date.now() - 16 * 60 * 60 * 1000), // 16 hours ago
        likes: 5,
        replies: 2,
        shares: 1,
    },
    {
        id: 5,
        user: {
            name: "Ava Thompson",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        content: "I've read the book, and I think the movie will do it justice. The casting choices are spot-on.",
        timestamp: new Date(Date.now() - 14 * 60 * 60 * 1000), // 14 hours ago
        likes: 4,
        replies: 0,
        shares: 0,
    },
]

const currentUser = {
    name: "You",
    avatar: "/placeholder.svg?height=40&width=40",
}

export function useComments() {
    const [comments, setComments] = useState(mockComments)

    const addComment = (content) => {
        const newComment = {
            id: Date.now(),
            user: currentUser,
            content,
            timestamp: new Date(),
            likes: 0,
            replies: 0,
            shares: 0,
        }
        setComments((prev) => [...prev, newComment])
    }

    return {
        comments,
        currentUser,
        addComment,
    }
}
