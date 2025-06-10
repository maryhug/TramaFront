import Header from "../Header/Header"
import Footer from "../Footer/footer"

export default function Layout({ children, activeNavItem }) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            <Header activeNavItem={activeNavItem} />
            <main className="flex-1 container mx-auto px-4 py-6">
                {children}
            </main>
            <Footer />
        </div>
    )
}
