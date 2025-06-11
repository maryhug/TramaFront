import { useEffect, useState } from "react"
import { MoviePost } from "./MoviePost"

export function ReviewsFeed() {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("http://tramaback-api.up.railway.app/trama/reviews")
            .then(res => res.json())
            .then(data => {
                console.log(data) // Verifica la estructura aquí
                setReviews(data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            {reviews.map(review => (
                <MoviePost
                    key={review.id}
                    user={{
                        name: review.user?.name,
                        avatar: review.user?.avatarUrl,
                        timeAgo: review.timeAgo // o calcula desde review.createdAt
                    }}
                    movie={{
                        title: review.movie?.title,
                        year: review.movie?.year,
                        rating: review.rating,
                        poster: review.movie?.posterUrl
                    }}
                    review={{
                        text: review.text,
                        likes: review.likes,
                        comments: review.comments,
                        bookmarks: review.bookmarks
                    }}
                />
            ))}
        </div>
    )
}