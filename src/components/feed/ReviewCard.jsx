import React, { useState } from "react";
import axios from "axios";

export function ReviewCard({ review, currentUser }) {
    const [liked, setLiked] = useState(review.likedByCurrentUser);
    const [likesCount, setLikesCount] = useState(review.likes);

    const handleLike = async () => {
        try {
            const res = await axios.post("/trama/review-likes/like", {
                reviewId: review.id,
                userId: currentUser.id,
            });
            setLiked(res.data.liked);
            setLikesCount(res.data.likesCount);
        } catch (error) {
            console.error("Error al dar like:", error);
        }
    };

    return (
        <div className="bg-gray-800 p-6 border-b border-gray-900 last:border-b-3 rounded-lg mb-4">
            <div className="flex gap-6">
                {/* Contenido de la reseña */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-white mb-2">
                        <span>Review</span>
                        <span>•</span>
                        <span>{review.timeAgo}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3">{review.movieTitle}</h3>
                    <p className="text-white leading-relaxed mb-4">{review.content}</p>

                    {/* Like */}
                    <button
                        className={`flex items-center space-x-2 transition-colors ${liked ? "text-red-500" : "text-gray-500 hover:text-red-500"}`}
                        onClick={handleLike}
                    >
                        <svg className="w-5 h-5" fill={liked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span className="text-sm">{likesCount}</span>
                    </button>

                    {/* Comment */}
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="text-sm">{review.comments}</span>
                    </button>

                    {/* Bookmark */}
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-yellow-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                        <span className="text-sm">{review.bookmarks}</span>
                    </button>
                </div>

                {/* Poster */}
                <div className="flex-shrink-0">
                    <div className="w-24 h-36 bg-gray-200 rounded-lg overflow-hidden">
                        <img
                            src={review.moviePoster || "/placeholder.svg"}
                            alt={review.movieTitle}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}