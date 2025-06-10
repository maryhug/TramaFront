import { Avatar } from "../ui/Avatar"
import { StarRating } from "../ui/StarRating"

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
        <article className={`bg-white rounded-lg border border-gray-200 p-6 ${className}`}>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <Avatar src={user.avatar} alt={user.name} />
                    <div>
                        <h3 className="font-semibold text-gray-900">{user.name}</h3>
                        <p className="text-sm text-gray-500">{user.timeAgo}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                        </svg>
                        {votes.up}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                        </svg>
                        {votes.down}
                    </div>
                </div>
            </div>

            {/* Movie Info */}
            <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-lg font-semibold text-gray-900">
                        {movie.title} ({movie.year})
                    </h2>
                    <StarRating rating={movie.rating} />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{review}</p>
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
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>
                        {comments} comentarios
                    </button>

                    <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                            />
                        </svg>
                        Compartir
                    </button>

                    <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                        </svg>
                        Guardar
                    </button>
                </div>

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
