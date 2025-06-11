import { ReviewCard } from "./ReviewCard"

export function ReviewsList({ reviews }) {
    return (
        <div className="bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <div className="px-6 py-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Reviews</h2>
                </div>

                <div className="divide-y divide-gray-900">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </div>
        </div>
    )
}
