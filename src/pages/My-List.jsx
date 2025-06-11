"use client"

import { useState } from "react"
import { TabNavigation } from "../components/Header/TabNavigation"
//import { ListsGrid } from "../components/feed/ListsGrid"
//import { useLists } from "../hooks/use-lists"

const tabs = [
    { id: "all", label: "All" },
    { id: "public", label: "Public" },
    { id: "private", label: "Private" },
]

export default function MyListsPage() {
    const [activeTab, setActiveTab] = useState("all")
   // const { lists, filterListsByType } = useLists()

    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }

    // const handleListClick = (list) => {
    //     console.log("Clicked on list:", list.title)
    //     // Aquí puedes agregar la navegación o lógica para abrir la lista
    // }

   // const filteredLists = filterListsByType(activeTab)

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="max-w-4xl mx-auto px-6 py-8">
                <div className="mb-8">
                    <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-white mb-6">My Lists</h2>
                    {/*<ListsGrid lists={filteredLists} onListClick={handleListClick} />*/}
                </div>
            </div>
        </div>
    )
}
