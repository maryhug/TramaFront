import { ReviewItem } from "./review-item"

export function ReviewsList({ reviews }) {
    return (
        <div className="space-y-0">
            {reviews.map((review) => (
                <ReviewItem key={review.id} review={review} />
            ))}
        </div>
    )
}
