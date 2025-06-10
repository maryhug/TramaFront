export function MoviePoster({ src, alt, className = "" }) {
    return (
        <div className={`rounded-lg overflow-hidden ${className}`}>
            <img
                src={src || "/placeholder.svg"}
                alt={alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                    e.target.src = "/placeholder.svg?height=200&width=150"
                }}
            />
        </div>
    )
}
