import "./globals.css"

export const metadata = {
    title: "My Lists App",
    description: "Manage your movie and TV show lists",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="bg-gray-900 text-white">{children}</body>
        </html>
    )
}
