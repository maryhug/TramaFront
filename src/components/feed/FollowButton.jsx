import React from "react";
import { useFollowers } from "../../hooks/use-followers";

export function FollowButton({ profileUserId, currentUserId, initialFollowing }) {
    const { following, loading, toggleFollow } = useFollowers(profileUserId, currentUserId, initialFollowing);

    return (
        <button
            className={`px-4 py-2 rounded ${following ? "bg-gray-300 text-gray-800" : "bg-blue-600 text-white"} ${loading ? "opacity-50" : ""}`}
            onClick={toggleFollow}
            disabled={loading}
        >
            {following ? "Siguiendo" : "Seguir"}
        </button>
    );
}