import { Button } from "../ui/Button"
import { SearchInput } from "../ui/SearchInput"
import { Avatar } from "../ui/Avatar"

export function Header() {
    return (
        <header className="bg-white border-b border-gray-200 px-6 py-3">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-sm">📺</span>
                    </div>
                    <span className="font-bold text-xl text-gray-900">TRAMA</span>
                </div>

                {/* Create Publication Button */}
                <Button variant="primary" className="hidden md:flex">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Crear Publicación
                </Button>

                {/* Search Bar */}
                <div className="flex-1 max-w-md mx-8">
                    <SearchInput placeholder="Buscar en Trama" />
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>
                    </button>

                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 7H4l5-5v5z" />
                        </svg>
                    </button>

                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </button>

                    <div className="flex items-center gap-2">
                        <Avatar src="/placeholder.svg?height=32&width=32" alt="Danieloide" />
                        <span className="font-medium text-gray-900 hidden md:block">Danieloide</span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    )
}
