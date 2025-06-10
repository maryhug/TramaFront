"use client"

export function StarRating({ rating, maxRating = 5, size = "sm", interactive = false, onRatingChange }) {
    const sizes = {
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
    }

    const handleStarClick = (starValue) => {
        if (interactive && onRatingChange) {
            onRatingChange(starValue)
        }
    }

    return (
        <div className="flex items-center space-x-1">
            {[...Array(maxRating)].map((_, index) => {
                const starValue = index + 1
                const isFilled = starValue <= rating

                return (
                    <button
                        key={index}
                        onClick={() => handleStarClick(starValue)}
                        disabled={!interactive}
                        className={`${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"} transition-transform`}
                    >
                        <StarIcon className={`${sizes[size]} ${isFilled ? "text-yellow-400 fill-current" : "text-gray-600"}`} />
                    </button>
                )
            })}
        </div>
    )
}

function StarIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
        </svg>
    )
}
