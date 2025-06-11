import { useState } from "react"
import axios from "axios"

const API_BASE_URL = "https://tramaback-api.up.railway.app"

export function useUserSearch() {
    const [searchQuery, setSearchQuery] = useState("")
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchUsers = async (query) => {
        if (!query.trim()) {
            setUsers([])
            setError(null)
            return
        }
        setLoading(true)
        setError(null)
        try {
            const userObj = JSON.parse(localStorage.getItem("user"))
            const token = userObj?.token
            const response = await axios.get(
                `${API_BASE_URL}/trama/users/name/${encodeURIComponent(query)}`,
                { headers: { Authorization: `Bearer ${token}` } }
            )
            // Si la respuesta es un solo objeto, lo convertimos a array
            const data = Array.isArray(response.data) ? response.data : [response.data]
            setUsers(data)
        } catch (err) {
            setUsers([])
            setError("No se encontraron usuarios o error de red")
        } finally {
            setLoading(false)
        }
    }

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleKeyDown = async (e) => {
        if (e.key === "Enter") {
            await fetchUsers(searchQuery)
        }
    }

    const handleSearchClear = () => {
        setSearchQuery("")
        setUsers([])
        setError(null)
    }

    return {
        searchQuery,
        users,
        loading,
        error,
        handleInputChange,
        handleKeyDown,
        handleSearchClear
    }
}