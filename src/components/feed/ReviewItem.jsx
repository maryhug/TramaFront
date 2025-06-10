"use client"

import { useState } from "react"
import { StarRating } from "../ui/StarRating"
import { ThumbsUpIcon, ThumbsDownIcon } from "../icons/Icons"

export function ReviewItem({ review }) {
    const [likes, setLikes] = useState(review.likes)
    const [dislikes, setDislikes] = useState(review.dislikes)
    const [userVote, setUserVote] = useState(null)

    const handleLike = () => {
        if (userVote === "like") {
            setLikes(likes - 1)
            setUserVote(null)
        } else {
            if (userVote === "dislike") {
                setDislikes(dislikes - 1)
            }
            setLikes(likes + 1)
            setUserVote("like")
        }
    }

    const handleDislike = () => {
        if (userVote === "dislike") {
            setDislikes(dislikes - 1)
            setUserVote(null)
        } else {
            if (userVote === "like") {
                setLikes(likes - 1)
            }
            setDislikes(dislikes + 1)
            setUserVote("dislike")
        }
    }

    return (
        <div className="border-b border-gray-800 pb-6 mb-6 last:border-b-0">
            {/* User Info */}
            <div className="flex items-center space-x-3 mb-4">
                <img
                    src={review.user.avatar || "/placeholder.svg?height=40&width=40"}
                    alt={review.user.name}
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <h4 className="text-white font-medium">{review.user.name}</h4>
                    <p className="text-gray-400 text-sm">{review.timeAgo}</p>
                </div>
            </div>

            {/* Rating */}
            <div className="mb-3">
                <StarRating rating={review.rating} size="sm" />
            </div>

            {/* Review Text */}
            <p className="text-gray-300 leading-relaxed mb-4">{review.content}</p>

            {/* Actions */}
            <div className="flex items-center space-x-6">
                <button
                    onClick={handleLike}
                    className={`flex items-center space-x-2 text-sm transition-colors ${
                        userVote === "like" ? "text-green-400" : "text-gray-400 hover:text-white"
                    }`}
                >
                    <ThumbsUpIcon className="w-4 h-4" />
                    <span>{likes}</span>
                </button>

                <button
                    onClick={handleDislike}
                    className={`flex items-center space-x-2 text-sm transition-colors ${
                        userVote === "dislike" ? "text-red-400" : "text-gray-400 hover:text-white"
                    }`}
                >
                    <ThumbsDownIcon className="w-4 h-4" />
                    <span>{dislikes}</span>
                </button>
            </div>
        </div>
    )
}
