"use client"

import { useState } from "react"
import {
    HeartIcon,
    SadIcon,
    SmileIcon,
    ZapIcon,
    LaughIcon,
    ShieldIcon,
    ZapOffIcon,
    FileTextIcon,
    PlayIcon,
    MasksIcon,
} from "../components/ui/icons"

export function useLists() {
    const [lists] = useState([
        {
            id: "favorites",
            title: "Favorites",
            itemCount: 10,
            icon: HeartIcon,
            type: "all",
        },
        {
            id: "sad",
            title: "Sad",
            itemCount: 5,
            icon: SadIcon,
            type: "all",
        },
        {
            id: "romance",
            title: "Romance",
            itemCount: 8,
            icon: SmileIcon,
            type: "all",
        },
        {
            id: "action",
            title: "Action",
            itemCount: 12,
            icon: ZapIcon,
            type: "all",
        },
        {
            id: "comedy",
            title: "Comedy",
            itemCount: 7,
            icon: LaughIcon,
            type: "all",
        },
        {
            id: "thriller",
            title: "Thriller",
            itemCount: 9,
            icon: ShieldIcon,
            type: "all",
        },
        {
            id: "sci-fi",
            title: "Sci-Fi",
            itemCount: 6,
            icon: ZapOffIcon,
            type: "all",
        },
        {
            id: "documentary",
            title: "Documentary",
            itemCount: 11,
            icon: FileTextIcon,
            type: "all",
        },
        {
            id: "animation",
            title: "Animation",
            itemCount: 4,
            icon: PlayIcon,
            type: "all",
        },
        {
            id: "drama",
            title: "Drama",
            itemCount: 15,
            icon: MasksIcon,
            type: "all",
        },
    ])

    const filterListsByType = (type) => {
        if (type === "all") return lists
        return lists.filter((list) => list.type === type)
    }

    return {
        lists,
        filterListsByType,
    }
}