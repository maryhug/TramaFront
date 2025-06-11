"use client"

import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "../icons/Icons"

export function BackButton({ className = "" }) {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <button
            onClick={handleBack}
            className={`flex items-center space-x-2 text-gray-300 hover:text-white transition-colors ${className}`}
        >
            <ArrowLeftIcon className="w-5 h-5" />
            <span className="font-medium">Volver</span>
        </button>
    )
}