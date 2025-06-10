export function ProgressBar({ value, max = 100, className = "", color = "pink" }) {
    const percentage = (value / max) * 100

    const colorClasses = {
        pink: "bg-pink-500",
        blue: "bg-blue-500",
        green: "bg-green-500",
        yellow: "bg-yellow-500",
        red: "bg-red-500",
    }

    return (
        <div className={`w-full bg-gray-700 rounded-full h-2 ${className}`}>
            <div
                className={`h-2 rounded-full transition-all duration-300 ${colorClasses[color]}`}
                style={{ width: `${percentage}%` }}
            />
        </div>
    )
}
