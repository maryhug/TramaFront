export function Badge({ children, variant = "default", className = "" }) {
    const variants = {
        default: "bg-gray-700 text-gray-200",
        primary: "bg-blue-600 text-white",
        secondary: "bg-gray-600 text-gray-200",
    }

    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
        >
      {children}
    </span>
    )
}
