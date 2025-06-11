// // Función para calcular el tiempo transcurrido
// function timeAgo(dateString) {
//     const date = new Date(dateString)
//     const now = new Date()
//     const diff = Math.floor((now - date) / 1000 / 60 / 60) // horas
//     if (diff < 24) return `Hace ${diff} horas`
//     const days = Math.floor(diff / 24)
//     return `Hace ${days} días`
// }
import { RightSidebar } from "../components/layout/RightSidebar"
import { CreatePost } from "../components/feed/CreatePost"
import { ContentFilters } from "../components/feed/ContentFilters"
import { ReviewsFeed } from "../components/feed/ReviewsFeed"
export default function Home() {
     // tramaback-api.up.railway.app

    return (
        <div className="min-h-screen bg-gray-900">

            <div className="flex max-w-7xl mx-auto">

                <main className="flex-1 p-6">
                    <CreatePost />
                    <ContentFilters />

                    <div className="space-y-6">
                        <h1 className="text-2xl font-bold text-white mb-6">Últimas reviews</h1>
                        <ReviewsFeed />
                    </div>
                </main>

                <RightSidebar />
            </div>
        </div>
    )
}