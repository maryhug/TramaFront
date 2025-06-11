// src/services/authService.js
import axios from 'axios';

// Reemplaza esta URL con la URL base de tu API de backend
const API_URL = 'tramaback-api.up.railway.app/trama'; // Ejemplo basado en la conversación anterior

const register = (name, email, password) => {
    return axios.post(`${API_URL}/users/save`, {
        name,
        email,
        passwordHash: password, // El backend debería encargarse del hashing real
        role: 'USER', // Rol por defecto
        isActive: true, // Estado por defecto
    });
};

const login = (email, password) => {
    return axios.post(`${API_URL}/auth/login`, {
        email,
        password,
    }).then((response) => {
        if (response.data.token) {
            // Almacena el usuario y el token
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
    // Aquí podrías también llamar a un endpoint de logout en el backend si existe
};

const getCurrentUser = () => {
    try {
        const userStr = localStorage.getItem('user');
        if (userStr) {
            return JSON.parse(userStr);
        }
        return null;
    } catch (error) {
        console.error("Error parsing user from localStorage", error);
        localStorage.removeItem('user'); // Limpiar localStorage si está corrupto
        return null;
    }
};

const authService = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default authService;