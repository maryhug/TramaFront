import { StarRating } from "../ui/star-rating"
import { ProgressBar } from "../ui/progress-bar"

export function RatingOverview({ averageRating, totalReviews, ratingDistribution }) {
    return (
        <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-8">
                {/* Average Rating */}
                <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">{averageRating}</div>
                    <StarRating rating={averageRating} size="md" />
                    <div className="text-gray-400 text-sm mt-2">{totalReviews} reviews</div>
                </div>

                {/* Rating Distribution */}
                <div className="flex-1 space-y-3">
                    {ratingDistribution.map((item) => (
                        <div key={item.stars} className="flex items-center space-x-4">
                            <span className="text-white text-sm w-2">{item.stars}</span>
                            <div className="flex-1">
                                <ProgressBar value={item.percentage} color="pink" />
                            </div>
                            <span className="text-gray-400 text-sm w-8">{item.percentage}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
