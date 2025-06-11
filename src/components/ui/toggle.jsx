"use client"

import { useState } from "react"

export function Toggle({ checked = false, onChange, disabled = false }) {
    const [isChecked, setIsChecked] = useState(checked)

    const handleToggle = () => {
        if (!disabled) {
            const newValue = !isChecked
            setIsChecked(newValue)
            onChange?.(newValue)
        }
    }

    return (
        <button
            type="button"
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-white ${
                isChecked ? "bg-white" : "bg-gray-600"
            } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            onClick={handleToggle}
            disabled={disabled}
        >
      <span
          className={`inline-block h-4 w-4 transform rounded-full bg-gray-900 transition-transform ${
              isChecked ? "translate-x-6" : "translate-x-1"
          }`}
      />
        </button>
    )
}
