"use client"

import { useState, useEffect } from "react"
import { DropdownMenu, DropdownMenuItem } from "./DropdownMenu"
import { UserIcon, SettingsIcon, LogOutIcon } from "../icons/Icons"
import { useNavigate } from "react-router-dom"

export function ProfileDropdown({ userId }) {
    const [userData, setUserData] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://tramaback-api.up.railway.app/trama/users/${userId}`)
                if (!response.ok) {
                    throw new Error('Error al obtener datos del usuario')
                }
                const data = await response.json()
                setUserData(data)
            } catch (error) {
                console.error('Error:', error)
            }
        }

        if (userId) {
            fetchUserData()
        }
    }, [userId])

    const handleProfileClick = () => {
        navigate("/profile")
    }

    const handleSettingsClick = () => {
        navigate("/settings")
    }

    const handleLogoutClick = () => {
        console.log("Logout user")
    }

    return (
        <DropdownMenu
            trigger={
                <div className="flex items-center space-x-3 hover:bg-white/10 rounded-lg px-3 py-2 transition-colors">
                    <div className="relative">
                        <img
                            src={userData?.avatar || "/placeholder.svg?height=40&width=40"}
                            alt={userData?.name || "Profile"}
                            className="w-10 h-10 rounded-full border-2 border-white/20 hover:border-white/40 transition-colors"
                        />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 border-2 border-slate-800 rounded-full"></div>
                    </div>
                    <div className="hidden lg:block">
                        <p className="text-sm font-medium text-white">{userData?.name || "Usuario"}</p>
                        <p className="text-xs text-gray-300">{userData?.email || "usuario@email.com"}</p>
                    </div>
                </div>
            }
        >
            <div className="px-4 py-3 border-b border-gray-200">
                <p className="text-sm font-medium text-gray-900">{userData?.name || "Usuario"}</p>
                <p className="text-xs text-gray-500">{userData?.email || "usuario@email.com"}</p>
            </div>

            <DropdownMenuItem onClick={handleProfileClick} icon={UserIcon}>
                Mi Perfil
            </DropdownMenuItem>

            <DropdownMenuItem onClick={handleSettingsClick} icon={SettingsIcon}>
                Configuraciones
            </DropdownMenuItem>

            <div className="border-t border-gray-200 mt-1">
                <DropdownMenuItem onClick={handleLogoutClick} icon={LogOutIcon}>
                    <span className="text-red-600">Cerrar Sesión</span>
                </DropdownMenuItem>
            </div>
        </DropdownMenu>
    )
}