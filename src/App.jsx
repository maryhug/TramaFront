// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import DescubrirPage from "./pages/Discover";
import HomePage from "./pages/Home";
import MyListsPage from "./pages/My-List";
import Buscar from "./pages/Movies";
import Review from "./pages/Review";
import Profile from "./pages/Profile";
import Layout from "./components/layout/Layout"; // Asumo que tienes este componente
import Settings from "./pages/Settings";
import CommentsPage from "./pages/Comentarios";
import { MoviePost } from "./components/feed/MoviePost";

// Nuevas importaciones
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import authService from "./services/authService";

function AppContent() {
    const [currentUser, setCurrentUser] = useState(undefined);
    const navigate = useNavigate(); // Hook para navegación programática

    useEffect(() => {
        const user = authService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const handleLogout = () => {
        authService.logout();
        setCurrentUser(null);
        navigate('/login'); // Redirige a login después de cerrar sesión
        window.location.reload(); // Opcional, para asegurar limpieza de estado
    };

    // Pasa currentUser y handleLogout al Layout si es necesario
    // para mostrar/ocultar elementos o añadir un botón de logout.
    // Ejemplo: <Layout activeNavItem="home" currentUser={currentUser} onLogout={handleLogout}>

    return (
        <div className="App">
            <Routes>
                {/* Rutas de autenticación (sin el Layout principal si no es necesario) */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* Rutas protegidas o que usan el Layout principal */}
                <Route
                    path="/"
                    element={
                        <Layout activeNavItem="home" currentUser={currentUser} onLogout={handleLogout}>
                            <HomePage />
                        </Layout>
                    }
                />
                <Route
                    path="/descubrir"
                    element={
                        <Layout activeNavItem="discover" currentUser={currentUser} onLogout={handleLogout}>
                            <DescubrirPage />
                        </Layout>
                    }
                />
                <Route
                    path="/mis-listas"
                    element={
                        <Layout activeNavItem="lists" currentUser={currentUser} onLogout={handleLogout}>
                            <MyListsPage />
                        </Layout>
                    }
                />
                <Route
                    path="/buscar"
                    element={
                        <Layout activeNavItem="lists" currentUser={currentUser} onLogout={handleLogout}>
                            <Buscar />
                        </Layout>
                    }
                />
                <Route
                    path="/review"
                    element={
                        <Layout activeNavItem="lists" currentUser={currentUser} onLogout={handleLogout}>
                            <Review />
                        </Layout>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        // Solo permite acceso a /profile si hay un usuario logueado
                        currentUser ? (
                            <Layout activeNavItem="profile" currentUser={currentUser} onLogout={handleLogout}>
                                <Profile />
                            </Layout>
                        ) : (
                            <LoginPage /> // O redirige a login
                        )
                    }
                />
                <Route
                    path="/settings"
                    element={
                         currentUser ? (
                            // Settings podría necesitar Layout o ser diferente
                            // Aquí asumimos que Settings también usa el Layout principal
                            <Layout activeNavItem="settings" currentUser={currentUser} onLogout={handleLogout}>
                                 <Settings />
                            </Layout>
                           
                        ) : (
                            <LoginPage />
                        )
                    }
                />
                <Route
                    path="/comments"
                    element={
                        <Layout activeNavItem="comments" currentUser={currentUser} onLogout={handleLogout}>
                            <CommentsPage />
                        </Layout>
                    }
                />
                <Route
                    path="/moviepost"
                    element={
                        <Layout activeNavItem="MoviePost" currentUser={currentUser} onLogout={handleLogout}>
                            <MoviePost />
                        </Layout>
                    }
                />
                {/* Puedes añadir una ruta para manejar páginas no encontradas */}
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;