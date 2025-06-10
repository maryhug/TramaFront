"use client"

import { Breadcrumb } from "../components/layout/breadcrumb"
import { RatingOverview } from "../components/feed/rating-overview"
import { ReviewsList } from "../components/feed/reviews-list"
import { Pagination } from "../components/ui/pagination"
import { useReviews } from "../hooks/use-reviews"

const breadcrumbItems = [{ label: "Movies", href: "/movies" }, { label: "Review" }]

export default function Review() {
    const { reviews, ratingData, currentPage, totalPages, setCurrentPage } = useReviews()

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="max-w-4xl mx-auto px-6 py-8">
                <Breadcrumb items={breadcrumbItems} />

                <h1 className="text-3xl font-bold text-white mb-8">Review for 'The Midnight Bloom'</h1>

                <RatingOverview
                    averageRating={ratingData.averageRating}
                    totalReviews={ratingData.totalReviews}
                    ratingDistribution={ratingData.ratingDistribution}
                />

                <ReviewsList reviews={reviews} />

                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
        </div>
    )
}
