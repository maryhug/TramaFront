// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authService from '../services/authService';


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');
        setLoading(true);

        try {
            await authService.login(email, password);
            navigate('/'); // Redirige a la página de inicio
            window.location.reload(); // Recarga para que App.jsx actualice el estado del usuario
        } catch (error) {
            const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            setMessage(resMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Iniciar Sesión</h2>
                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-gray-200 mb-1">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-200 mb-1">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 rounded bg-red-500 hover:bg-red-600 text-white font-semibold transition-colors disabled:opacity-60"
                    >
                        {loading ? 'Iniciando...' : 'Iniciar Sesión'}
                    </button>
                </form>
                {message && (
                    <p className="mt-4 text-center font-medium text-red-400">
                        {message}
                    </p>
                )}
                <p className="mt-6 text-center text-gray-300">
                    ¿No tienes cuenta?{' '}
                    <Link to="/register" className="text-red-400 hover:underline">
                        Regístrate aquí
                    </Link>
                </p>
            </div>
        </div>
    );
}