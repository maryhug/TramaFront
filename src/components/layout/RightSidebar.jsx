import { Avatar } from "../ui/Avatar"
import { Button } from "../ui/Button"

export function RightSidebar() {
    const trendingContent = [
        {
            type: "Película tendencia",
            title: "Dune: Part Two",
            stats: "15.2k Publicaciones",
        },
        {
            type: "Serie tendencia",
            title: "The Bear",
            stats: "12.8k Publicaciones",
        },
        {
            type: "Actor tendencia",
            title: "Anya Taylor-Joy",
            stats: "10.1k Publicaciones",
        },
    ]

    const suggestedUsers = [
        {
            name: "Cinefilox",
            username: "@cinefilox_x",
            avatar: "/placeholder.svg?height=32&width=32",
        },
        {
            name: "SeriesWatcher",
            username: "@series_fan",
            avatar: "/placeholder.svg?height=32&width=32",
        },
    ]

    return (
        <aside className="w-80 p-6 space-y-6">
            {/* Tendencias */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h2 className="font-semibold text-gray-900 mb-4">Tendencias</h2>
                <div className="space-y-4">
                    {trendingContent.map((item, index) => (
                        <div key={index} className="space-y-1">
                            <p className="text-xs text-gray-500">{item.type}</p>
                            <h3 className="font-semibold text-gray-900">{item.title}</h3>
                            <p className="text-xs text-gray-500">{item.stats}</p>
                        </div>
                    ))}
                </div>
                <button className="text-red-500 text-sm font-medium mt-4 hover:text-red-600">Mostrar más</button>
            </div>

            {/* A quién seguir */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h2 className="font-semibold text-gray-900 mb-4">A quién seguir</h2>
                <div className="space-y-4">
                    {suggestedUsers.map((user, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Avatar src={user.avatar} alt={user.name} size="sm" />
                                <div>
                                    <h3 className="font-medium text-gray-900 text-sm">{user.name}</h3>
                                    <p className="text-xs text-gray-500">{user.username}</p>
                                </div>
                            </div>
                            <Button size="sm" variant="primary">
                                Seguir
                            </Button>
                        </div>
                    ))}
                </div>
                <button className="text-red-500 text-sm font-medium mt-4 hover:text-red-600">Mostrar más</button>
            </div>
        </aside>
    )
}
