import { useState } from "react"

export function StarRating({ value = 0, onChange, max = 5, className = "" }) {
    const [hovered, setHovered] = useState(null)

    return (
        <div className={`flex space-x-1 ${className}`}>
            {Array.from({ length: max }, (_, i) => {
                const filled = hovered != null ? i < hovered : i < value
                return (
                    <svg
                        key={i}
                        onMouseEnter={() => setHovered(i + 1)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => onChange?.(i + 1)}
                        className={`w-5 h-5 cursor-pointer ${filled ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.383 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.922-.755 1.688-1.538 1.118l-3.383-2.46a1 1 0 00-1.175 0l-3.383 2.46c-.783.57-1.838-.196-1.538-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.294 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.973z" />
                    </svg>
                )
            })}
        </div>
    )
}
