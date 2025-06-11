export function MoviePoster({ src, alt, className = "" }) {
    return (
        <div className={`rounded-lg overflow-hidden shadow-lg ${className}`}>
            <img
                src={src || "/placeholder.svg?height=600&width=400"}
                alt={alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                    e.target.src = "/placeholder.svg?height=600&width=400"
                }}
            />
        </div>
    )
}
