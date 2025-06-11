"use client"

import { useState } from "react"
import { HeartIcon, CommentIcon, ShareIcon } from "../icons/Icons"

export function CommentActions({ likes = 0, replies = 0, shares = 0, onLike, onReply, onShare }) {
    const [isLiked, setIsLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(likes)

    const handleLike = () => {
        const newLikedState = !isLiked
        setIsLiked(newLikedState)
        setLikeCount((prev) => (newLikedState ? prev + 1 : prev - 1))
        onLike?.(newLikedState)
    }

    return (
        <div className="flex items-center space-x-6 mt-3">
            <button
                onClick={handleLike}
                className={`flex items-center space-x-2 text-sm transition-colors ${
                    isLiked ? "text-red-500" : "text-gray-400 hover:text-gray-300"
                }`}
            >
                <HeartIcon className="w-4 h-4" filled={isLiked} />
                <span>{likeCount}</span>
            </button>

            <button
                onClick={onReply}
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-gray-300 transition-colors"
            >
                <CommentIcon className="w-4 h-4" />
                <span>{replies}</span>
            </button>

            <button
                onClick={onShare}
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-gray-300 transition-colors"
            >
                <ShareIcon className="w-4 h-4" />
                <span>{shares}</span>
            </button>
        </div>
    )
}
