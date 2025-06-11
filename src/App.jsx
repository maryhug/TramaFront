// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import DescubrirPage from "./pages/Discover";
import HomePage from "./pages/Home";
import MyListsPage from "./pages/My-List";
import Buscar from "./pages/Movies";
import Review from "./pages/Review";
import Profile from "./pages/Profile";
import Layout from "./components/layout/Layout";
import Settings from "./pages/Settings";
import CommentsPage from "./pages/Comentarios";
import { MoviePost } from "./components/feed/MoviePost";
import { ReviewCard } from "./components/feed/ReviewCard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import authService from "./services/authService";

function AppContent() {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [loadingUser, setLoadingUser] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const user = authService.getCurrentUser();
        setCurrentUser(user);
        setLoadingUser(false);
    }, []);

    const handleLogout = () => {
        authService.logout();
        setCurrentUser(null);
        navigate('/login');
    };

    if (loadingUser) {
        return <div style={{ color: "white", textAlign: "center", marginTop: 40 }}>Cargando...</div>;
    }

    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

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
                {/* Rutas para perfil */}
                <Route
                    path="/profile"
                    element={
                        currentUser ? (
                            <Layout activeNavItem="profile" currentUser={currentUser} onLogout={handleLogout}>
                                <Profile currentUser={currentUser} />
                            </Layout>
                        ) : (
                            <LoginPage />
                        )
                    }
                />
                <Route
                    path="/profile/:userId"
                    element={
                        currentUser ? (
                            <Layout activeNavItem="profile" currentUser={currentUser} onLogout={handleLogout}>
                                <Profile currentUser={currentUser} />
                            </Layout>
                        ) : (
                            <LoginPage />
                        )
                    }
                />
                <Route
                    path="/settings"
                    element={
                        currentUser ? (
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
                    path="/ReviewCard"
                    element={
                        <Layout activeNavItem="ReviewCard" currentUser={currentUser} onLogout={handleLogout}>
                            <ReviewCard />
                        </Layout>
                    }
                />
                {/* Ruta para página no encontrada */}
                <Route path="*" element={<div style={{ color: "white", textAlign: "center", marginTop: 40 }}>Página no encontrada</div>} />
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