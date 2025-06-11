import { Avatar } from "../ui/Avatar"
import { StarRating } from "../ui/StarRating"
import { Link } from "react-router-dom"

// interface MoviePostProps {
//     user: {
//         name: string
//         avatar: string
//         timeAgo: string
//     }
//     movie: {
//         title: string
//         year: number
//         rating: number
//         poster?: string
//     }
//     review: string
//     votes: {
//         up: number
//         down: number
//     }
//     comments: number
//     className?: string
// }

export function MoviePost({ user, movie, review, votes, comments, className = "" }) {
    return (
        <article className={`bg-gray-800 rounded-lg border border-gray-800 p-6 ${className}`}>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <Avatar src={user.avatar} alt={user.name} />
                    <div>
                        <h3 className="font-semibold text-white">{user.name}</h3>
                        <p className="text-sm text-gray-500">{user.timeAgo}</p>
                    </div>
                </div>
            </div>

            {/* Movie Info */}
            <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-lg font-semibold text-white">
                        {movie.title} ({movie.year})
                    </h2>
                    <StarRating rating={movie.rating} />
                </div>
                <p className="text-white text-sm leading-relaxed">{review}</p>
            </div>

            {/* Movie Poster */}
            {movie.poster && (
                <div className="mb-4">
                    <img
                        src={movie.poster || "/placeholder.svg"}
                        alt={movie.title}
                        className="w-full max-w-md mx-auto rounded-lg"
                    />
                </div>
            )}

            {/* Actions */}
            <div className="flex items-center gap-x-4 pt-4 border-t border-gray-100">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-sm">{review.likes}</span>
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

                <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                    </svg>
                </button>
            </div>
        </article>
    )
}