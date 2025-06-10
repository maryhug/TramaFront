"use client"

export function ListItem({ icon: Icon, title, itemCount, onClick }) {
    return (
        <div
            className="flex items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors cursor-pointer"
            onClick={onClick}
        >
            <div className="flex items-center justify-center w-10 h-10 bg-gray-700/50 rounded-lg mr-4">
                <Icon className="w-5 h-5 text-gray-300" />
            </div>
            <div className="flex-1">
                <h3 className="text-white font-medium">{title}</h3>
                <p className="text-gray-400 text-sm">{itemCount} items</p>
            </div>
        </div>
    )
}
