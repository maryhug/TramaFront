export function Button({ children, onClick, className = "", type = "button" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition ${className}`}
        >
            {children}
        </button>
    )
}
