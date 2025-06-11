import { useState, useRef } from "react"
import axios from "axios"

const API_BASE_URL = "https://tramaback-api.up.railway.app"
const PAGE_SIZE = 10

export function useMovieSearch() {
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const lastQueryRef = useRef("")
    const allResultsRef = useRef([])

    const fetchMovies = async (query, pageNum = 1) => {
        if (!query.trim()) {
            setMovies([])
            setTotalPages(1)
            setPage(1)
            allResultsRef.current = []
            return
        }
        setLoading(true)
        try {
            const response = await axios.get(
                `${API_BASE_URL}/movies/title/${encodeURIComponent(query)}`
            )
            // Si la respuesta es un array, úsala directamente
            const results = Array.isArray(response.data)
                ? response.data
                : (response.data.results || [])
            allResultsRef.current = results
            const total = results.length
            setTotalPages(Math.max(1, Math.ceil(total / PAGE_SIZE)))
            setPage(pageNum)
            // Paginar manualmente
            const start = (pageNum - 1) * PAGE_SIZE
            const end = start + PAGE_SIZE
            setMovies(
                results.slice(start, end).map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    director: movie.director || "Desconocido",
                    releaseDate: movie.releaseDate || "N/A",
                    posterUrl: movie.posterUrl || ""
                }))
            )
        } catch {
            setMovies([])
            setTotalPages(1)
            setPage(1)
            allResultsRef.current = []
        } finally {
            setLoading(false)
        }
    }

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleKeyDown = async (e) => {
        if (e.key === "Enter") {
            lastQueryRef.current = searchQuery
            await fetchMovies(searchQuery, 1)
        }
    }

    const handleSearchClear = () => {
        setSearchQuery("")
        setMovies([])
        setPage(1)
        setTotalPages(1)
        lastQueryRef.current = ""
        allResultsRef.current = []
    }

    const goToPage = async (newPage) => {
        // No hace falta llamar a la API de nuevo, solo paginar localmente
        const results = allResultsRef.current
        setPage(newPage)
        const start = (newPage - 1) * PAGE_SIZE
        const end = start + PAGE_SIZE
        setMovies(
            results.slice(start, end).map(movie => ({
                id: movie.id,
                title: movie.title,
                director: movie.director || "Desconocido",
                releaseDate: movie.releaseDate || "N/A",
                posterUrl: movie.posterUrl || ""
            }))
        )
    }

    return {
        searchQuery,
        movies,
        loading,
        page,
        totalPages,
        handleInputChange,
        handleKeyDown,
        handleSearchClear,
        goToPage
    }
}