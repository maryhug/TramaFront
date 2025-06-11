import { StarIcon } from "../icons/Icons"

export function Rating({ rating, maxRating = 5, showValue = true, className = "" }) {
    const safeRating = typeof rating === "number" && !isNaN(rating) ? rating : 0
    const stars = []
    const fullStars = Math.floor(safeRating)
    const hasHalfStar = safeRating % 1 !== 0

    for (let i = 0; i < maxRating; i++) {
        if (i < fullStars) {
            stars.push(<StarIcon key={i} className="w-4 h-4 text-yellow-400" filled />)
        } else if (i === fullStars && hasHalfStar) {
            stars.push(<StarIcon key={i} className="w-4 h-4 text-yellow-400" filled />)
        } else {
            stars.push(<StarIcon key={i} className="w-4 h-4 text-gray-600" />)
        }
    }

    return (
        <div className={`flex items-center space-x-1 ${className}`}>
            <div className="flex">{stars}</div>
            {showValue && <span className="text-sm text-gray-300 ml-2">{safeRating.toFixed(1)}</span>}
        </div>
    )
}