"use client"

export function TabNavigation({ tabs, activeTab, onTabChange }) {
    return (
        <div className="flex space-x-8 border-b border-gray-700">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`pb-4 px-1 text-sm font-medium transition-colors relative ${
                        activeTab === tab.id ? "text-white border-b-2 border-orange-500" : "text-gray-400 hover:text-gray-300"
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    )
}
