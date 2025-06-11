import { useEffect, useState } from "react"
import { MoviePost } from "./MoviePost"

function timeAgo(dateString) {
    const date = new Date(dateString)
    const now = new Date()
    const diff = Math.floor((now - date) / 1000 / 60 / 60) // horas
    if (diff < 24) return `Hace ${diff} horas`
    const days = Math.floor(diff / 24)
    return `Hace ${days} días`
}

export function ReviewsFeed() {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("https://tramaback-api.up.railway.app/trama/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            {reviews.map((review, idx) => (
                <MoviePost
                    key={`${review.userId}-${review.movieId}-${idx}`}
                    className="mb-6"
                    user={{
                        name: review.userName,
                        avatar: review.imageUrl || "/placeholder.svg",
                        timeAgo: timeAgo(review.publishedDate)
                    }}
                    movie={{
                        title: review.movieTitle,
                        year: new Date(review.movieReleaseDate).getFullYear(),
                        rating: review.rating,
                        poster: review.imageUrl
                    }}
                    review={review.content}
                    votes={{
                        up: review.likes || 0,
                        down: 0
                    }}
                    comments={review.comments || 0}
                    bookmarks={review.bookmarks || 0}
                />
            ))}
        </div>
    )
}