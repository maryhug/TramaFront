"use client"

import { useState, useEffect } from "react"

// Mock data para The Shawshank Redemption
const mockMovies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        year: "2024",
        genre: "Drama",
        duration: "2h 22m",
        poster: "/placeholder.svg?height=200&width=150",
    },
    {
        id: 2,
        title: "The Shawshank Redemption",
        year: "2024",
        genre: "Drama",
        duration: "2h 22m",
        poster: "/placeholder.svg?height=200&width=150",
    },
    {
        id: 3,
        title: "The Shawshank Redemption",
        year: "2024",
        genre: "Drama",
        duration: "2h 22m",
        poster: "/placeholder.svg?height=200&width=150",
    },
    {
        id: 4,
        title: "The Shawshank Redemption",
        year: "2024",
        genre: "Drama",
        duration: "2h 22m",
        poster: "/placeholder.svg?height=200&width=150",
    },
    {
        id: 5,
        title: "The Shawshank Redemption",
        year: "2024",
        genre: "Drama",
        duration: "2h 22m",
        poster: "/placeholder.svg?height=200&width=150",
    },
]

export function useMovieSearch() {
    const [searchQuery, setSearchQuery] = useState("The Shawshank Redemption")
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (searchQuery.trim()) {
            setLoading(true)
            // Simular búsqueda
            setTimeout(() => {
                setMovies(mockMovies)
                setLoading(false)
            }, 300)
        } else {
            setMovies([])
        }
    }, [searchQuery])

    const handleSearchChange = (query) => {
        setSearchQuery(query)
    }

    const handleSearchClear = () => {
        setSearchQuery("")
    }

    return {
        searchQuery,
        movies,
        loading,
        handleSearchChange,
        handleSearchClear,
    }
}
