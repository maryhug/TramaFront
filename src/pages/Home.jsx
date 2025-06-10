import { RightSidebar } from "../components/layout/RightSidebar"
import { CreatePost } from "../components/feed/CreatePost"
import { ContentFilters } from "../components/feed/ContentFilters"
import { MoviePost } from "../components/feed/MoviePost"

export default function Home() {
    const samplePosts = [
        {
            user: {
                name: "Marie_bug",
                avatar: "/placeholder.svg?height=40&width=40",
                timeAgo: "Hace 22 Horas",
            },
            movie: {
                title: "Lucy",
                year: 2014,
                rating: 4,
            },
            review:
                "Muy buena película. Me encantó. Scarlett Johansson es una gran actriz. Los efectos visuales son muy buenos. La trama es buena. El jefe de la mafia coreana es re despiadado sin ningún tipo de remordimientos. Sólo le importa sus intereses. Morgan Freeman es también un gran actor. Personifica muy bien su personaje de científico. La califico a la película con un 10.",
            votes: { up: 15, down: 0 },
            comments: 2,
        },
        {
            user: {
                name: "Aang_",
                avatar: "/placeholder.svg?height=40&width=40",
                timeAgo: "Hace 4 días",
            },
            movie: {
                title: "La La Land",
                year: 2016,
                rating: 5,
                poster: "/placeholder.svg?height=400&width=300",
            },
            review:
                "Una obra maestra del cine musical moderno. Ryan Gosling y Emma Stone tienen una química increíble en pantalla.",
            votes: { up: 3, down: 0 },
            comments: 2,
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="flex max-w-7xl mx-auto">

                {/* Main Content */}
                <main className="flex-1 p-6">
                    <CreatePost />
                    <ContentFilters />

                    <div className="space-y-6">
                        {samplePosts.map((post, index) => (
                            <MoviePost
                                key={index}
                                user={post.user}
                                movie={post.movie}
                                review={post.review}
                                votes={post.votes}
                                comments={post.comments}
                            />
                        ))}
                    </div>
                </main>

                <RightSidebar />
            </div>
        </div>
    )
}
