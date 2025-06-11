"use client"

import { useEffect, useState } from "react"
import { DropdownMenu, DropdownMenuItem } from "./DropdownMenu"
import { UserIcon, SettingsIcon, LogOutIcon } from "../icons/Icons"
import { useNavigate } from "react-router-dom"

export function ProfileDropdown() {
    const [userData, setUserData] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        // Obtén el usuario autenticado desde localStorage
        const userObj = JSON.parse(localStorage.getItem("user"))
        if (userObj && userObj.user) {
            setUserData({
                name: userObj.user.name,
                email: userObj.user.email,
                avatar: userObj.user.avatar || "/placeholder.svg?height=40&width=40"
            })
        }
    }, [])

    const handleProfileClick = () => {
        const userObj = JSON.parse(localStorage.getItem("user"))
        // El id puede estar en userObj.id, userObj._id o userObj.user.id/_id
        const userId =
            userObj?.id ||
            userObj?._id ||
            userObj?.user?.id ||
            userObj?.user?._id
        if (userId) {
            navigate(`/profile/${userId}`)
        } else {
            navigate("/profile")
        }
    }

    const handleSettingsClick = () => {
        navigate("/settings")
    }

    const handleLogoutClick = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("userId")
        navigate("/login")
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