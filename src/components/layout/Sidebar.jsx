interface SidebarProps {
    className?: string
}

export function Sidebar({ className = "" }: SidebarProps) {
    const navigationItems = [
        { icon: "🏠", label: "Inicio", active: true },
        { icon: "🎬", label: "Películas", active: false },
        { icon: "📺", label: "Series", active: false },
        { icon: "📋", label: "Mis Listas", active: false },
        { icon: "🔍", label: "Explorar", active: false },
    ]

    const popularLists = ["Películas para llorar", "Comedias románticas", "Clásicos del terror"]

    return (
        <aside className={`w-64 bg-white border-r border-gray-200 h-full ${className}`}>
            <div className="p-6">
                {/* Navigation */}
                <div className="mb-8">
                    <h2 className="font-semibold text-gray-900 mb-4">Navegación</h2>
                    <nav className="space-y-2">
                        {navigationItems.map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                                    item.active
                                        ? "bg-gray-100 text-gray-900 font-medium"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                            >
                                <span className="text-lg">{item.icon}</span>
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Popular Lists */}
                <div>
                    <h2 className="font-semibold text-gray-900 mb-4">Listas Populares</h2>
                    <div className="space-y-2">
                        {popularLists.map((list, index) => (
                            <a key={index} href="#" className="block text-sm text-gray-600 hover:text-gray-900 py-1">
                                {list}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    )
}
