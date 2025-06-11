import { useState, useEffect } from "react"

export function useMovieData(movieId) {
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true)
            try {
                const res = await fetch(`https://tramaback-api.up.railway.app/movies/id/${movieId}`)
                const data = await res.json()
                setMovie(data)
            } catch {
                setMovie(null)
            } finally {
                setLoading(false)
            }
        }
        fetchMovie()
    }, [movieId])

    return { movie, loading }
}