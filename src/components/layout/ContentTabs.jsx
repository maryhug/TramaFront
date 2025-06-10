"use client"

import { TabNavigation } from "../Header/TabNavigation"

const tabs = [
    { id: "top", label: "Top" },
    { id: "movies", label: "Movies" },
    { id: "users", label: "Users" },
]

export function ContentTabs({ activeTab, onTabChange }) {
    return (
        <div className="mb-8">
            <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
        </div>
    )
}
