"use client"

import { DropdownMenu, DropdownMenuItem } from "./DropdownMenu"
import { UserIcon, SettingsIcon, LogOutIcon } from "../icons/Icons"

export function ProfileDropdown({ user }) {
    const handleProfileClick = () => {
        console.log("Navigate to profile")
    }

    const handleSettingsClick = () => {
        console.log("Navigate to settings")
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
                            src={user?.avatar || "/placeholder.svg?height=40&width=40"}
                            alt={user?.name || "Profile"}
                            className="w-10 h-10 rounded-full border-2 border-white/20 hover:border-white/40 transition-colors"
                        />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 border-2 border-slate-800 rounded-full"></div>
                    </div>
                    <div className="hidden lg:block">
                        <p className="text-sm font-medium text-white">{user?.name || "Usuario"}</p>
                        <p className="text-xs text-gray-300">{user?.email || "usuario@email.com"}</p>
                    </div>
                </div>
            }
        >
            <div className="px-4 py-3 border-b border-gray-200">
                <p className="text-sm font-medium text-gray-900">{user?.name || "Usuario"}</p>
                <p className="text-xs text-gray-500">{user?.email || "usuario@email.com"}</p>
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
