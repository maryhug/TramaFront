"use client"

import { useState, useEffect } from "react"
import { Button } from "../ui/Button"

export function ProfileHeader({ userId }) {
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                console.log('Intentando obtener usuario con ID:', userId)
                const response = await fetch(`http://tramaback-api.up.railway.app/trama/users/${userId}`)
                console.log('Respuesta de la API:', response)

                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`)
                }

                const data = await response.json()
                console.log('Datos recibidos:', data)
                setUserData(data)
            } catch (error) {
                console.error('Error detallado:', error)
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        if (userId) {
            fetchUserData()
        } else {
            console.error('No se proporcionó userId')
            setLoading(false)
        }
    }, [userId])

    if (loading) {
        return <div className="text-white">Cargando...</div>
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>
    }

    if (!userData) {
        return <div className="text-white">No se encontró el usuario</div>
    }

    return (
        <div className="bg-gray-900">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="text-center">
                    <div className="relative inline-block mb-6">
                        <div className="w-32 h-32 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full overflow-hidden">
                            <img src={userData.avatar || "/placeholder.svg"} alt={userData.name} className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-white mb-2">{userData.name}</h1>
                    <p className="text-white max-w-2xl mx-auto mb-2 leading-relaxed">{userData.bio}</p>
                    <p className="text-sm text-white mb-6">Joined in {userData.joinYear}</p>

                    <div className="flex justify-center space-x-3">
                        <Button variant="secondary">Edit profile</Button>
                        <Button variant="primary">Share profile</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}