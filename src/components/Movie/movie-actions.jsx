"use client"

import { useState } from "react"
import { Button } from "../ui/Button"
import { HeartIcon, ShareIcon, PlusIcon, PlayIcon } from "../icons/Icons"

export function MovieActions({ onAddToList, onAddToFavorites, onShare, onWatchTrailer }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const [isInList, setIsInList] = useState(false)

    const handleFavorite = () => {
        setIsFavorite(!isFavorite)
        onAddToFavorites?.(!isFavorite)
    }

    const handleAddToList = () => {
        setIsInList(!isInList)
        onAddToList?.(!isInList)
    }

    return (
        <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="lg" onClick={onWatchTrailer} className="flex-1 min-w-0">
                <PlayIcon className="w-5 h-5 mr-2" />
                Watch Trailer
            </Button>

            <Button variant="outline" onClick={handleAddToList} className={isInList ? "bg-green-600 border-green-600" : ""}>
                <PlusIcon className="w-4 h-4 mr-2" />
                {isInList ? "Added" : "Add to List"}
            </Button>

            <Button variant="ghost" onClick={handleFavorite} className={isFavorite ? "text-red-500" : ""}>
                <HeartIcon className="w-4 h-4" filled={isFavorite} />
            </Button>

            <Button variant="ghost" onClick={onShare}>
                <ShareIcon className="w-4 h-4" />
            </Button>
        </div>
    )
}
