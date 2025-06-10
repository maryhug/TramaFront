import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DescubrirPage from "./pages/Discover"
import HomePage from "./pages/Home"
import Header from "./components/Header/Header"
import MyListsPage from "./pages/My-List"
import Buscar from "./pages/Movies"
import Review from "./pages/Review"

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header activeNavItem="home" />
                                <HomePage />
                            </>
                        }
                    />
                    <Route
                        path="/descubrir"
                        element={
                            <>
                                <Header activeNavItem="discover" />
                                <DescubrirPage />
                            </>
                        }
                    />
                    {/* Puedes agregar otras rutas similares: */}

                    <Route path="/mis-listas" element={
                        <>
                            <Header activeNavItem="lists" />
                            <MyListsPage />
                        </>
                    } />

                    <Route path="/buscar" element={
                        <>
                            <Header activeNavItem="lists" />
                            <Buscar />
                        </>
                    } />

                    <Route path="/review" element={
                        <>
                            <Header activeNavItem="lists" />
                            <Review />
                        </>
                    } />

                </Routes>
            </div>
        </Router>
    )
}

export default App
