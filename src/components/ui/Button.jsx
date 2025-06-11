// export function Button({ children, onClick, className = "", type = "button" }) {
//     return (
//         <button
//             type={type}
//             onClick={onClick}
//             className={`px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition ${className}`}
//         >
//             {children}
//         </button>
//     )
// }
//
// "use client"

export function Button({
                           children,
                           variant = "default",
                           size = "default",
                           className = "",
                           onClick,
                           disabled = false,
                           ...props
                       }) {
    const baseClasses =
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

    const variants = {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        ghost: "hover:bg-gray-800 text-gray-300 hover:text-white",
        outline: "border border-gray-600 bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white",
        primary: "bg-orange-600 text-white hover:bg-orange-700",
    }

    const sizes = {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-6 text-lg",
    }

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}
