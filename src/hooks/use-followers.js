// src/hooks/use-followers.js
import { useState } from "react"
import axios from "axios"

const API_BASE_URL = "https://tramaback-api.up.railway.app"

export function useFollowers(profileUserId, currentUserId, initialFollowing) {
    const [following, setFollowing] = useState(initialFollowing)
    const [loading, setLoading] = useState(false)

    const toggleFollow = async () => {
        setLoading(true)
        try {
            const res = await axios.post(
                `${API_BASE_URL}/trama/followers/follow`,
                { followerId: currentUserId, followingId: profileUserId }
            )
            setFollowing(res.data.following)
        } catch (e) {
            // Manejo de error
        } finally {
            setLoading(false)
        }
    }

    return { following, loading, toggleFollow }
}