export function Avatar({ src, alt = "Avatar", size = "md", className = "" }) {
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12",
    }

    return (
        <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gray-300 ${className}`}>
            {src ? (
                <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
            ) : (
                <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white font-medium">
                    {alt.charAt(0).toUpperCase()}
                </div>
            )}
        </div>
    )
}

