"use client"

import { useState, useRef, useEffect } from "react"

export function DropdownMenu({ trigger, children, align = "right" }) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const alignmentClasses = {
        left: "left-0",
        right: "right-0",
        center: "left-1/2 transform -translate-x-1/2",
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                {trigger}
            </div>

            {isOpen && (
                <div
                    className={`absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 ${alignmentClasses[align]}`}
                >
                    {children}
                </div>
            )}
        </div>
    )
}

export function DropdownMenuItem({ children, onClick, icon: Icon }) {
    return (
        <button
            onClick={onClick}
            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center space-x-3 transition-colors"
        >
            {Icon && <Icon className="w-4 h-4 text-gray-500" />}
            <span className="text-sm font-medium">{children}</span>
        </button>
    )
}
