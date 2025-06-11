import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DescubrirPage from "./pages/Discover"
import HomePage from "./pages/Home"
import MyListsPage from "./pages/My-List"
import Buscar from "./pages/Movies"
import Review from "./pages/Review"
import Profile from "./pages/Profile"
import Layout from "./components/layout/Layout"
import Settings from "./pages/Settings"
import CommentsPage from "./pages/Comentarios"
import { MoviePost } from "./components/feed/MoviePost";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Layout activeNavItem="home">
                                <HomePage />
                            </Layout>
                        }
                    />

                    <Route
                        path="/descubrir"
                        element={
                            <Layout activeNavItem="discover">
                                <DescubrirPage />
                            </Layout>
                        }
                    />

                    <Route
                        path="/mis-listas"
                        element={
                            <Layout activeNavItem="lists">
                                <MyListsPage />
                            </Layout>
                        }
                    />

                    <Route
                        path="/buscar"
                        element={
                            <Layout activeNavItem="lists">
                                <Buscar />
                            </Layout>
                        }
                    />

                    <Route
                        path="/review"
                        element={
                            <Layout activeNavItem="lists">
                                <Review />
                            </Layout>
                        }
                    />

                    <Route
                        path="/profile"
                        element={
                            <Layout activeNavItem="lists">
                                <Profile />
                            </Layout>
                        }
                    />

                    <Route
                        path="/settings"
                        element={
                            <Settings activeNavItem="lists">
                                <Profile />
                            </Settings>
                        }
                    />
                    <Route
                        path="/comments"
                        element={
                            <Layout activeNavItem="comments">
                                <CommentsPage />
                            </Layout>
                        }
                    />

                    <Route
                        path="/moviepost"
                        element={
                            <Layout activeNavItem="MoviePost">
                                <MoviePost />
                            </Layout>
                        }
                    />

                </Routes>
            </div>
        </Router>
    )
}

export default App
