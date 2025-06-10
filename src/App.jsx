// import React from "react";
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Header from "./components/Header";
// import DiscoverSection from "./pages/Discover";
// import Home from "./pages/Home";
//
// // Puedes agregar más páginas aquí
// // const Home = () => <div className="text-white p-10">Bienvenido a Home</div>;
// const MyLists = () => <div className="text-white p-10">Mis listas</div>;
//
// function App() {
//     return (
//         <Router>
//             <Header/>
//
//
//             <Router>
//                 <div className="App">
//                     <Routes>
//                         <Route path="/" element={<Home />} />
//                         <Route path="/descubrir" element={<DiscoverSection/>}/>
//                         <Route path="/mis-listas" element={<MyLists/>}/>
//                         {/* Otras rutas aquí */}
//                     </Routes>
//                 </div>
//             </Router>
//         </Router>
//     );
// }
//
// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiscoverSection from "./pages/Discover";
import Home from "./pages/Home";
import Header from "./components/Header"
import MyLists from "./pages/My-List"
import SearchPage from "./pages/Movies"

// Puedes agregar más páginas aquí
//const MyLists = () => <div className="text-white p-10">Mis listas</div>;

function App() {
    return (
        <Router>
            <Header />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/descubrir" element={<DiscoverSection />} />
                    <Route path="/mis-listas" element={<MyLists />} />
                    <Route path="/buscar" element={<SearchPage />} />
                    {/* Otras rutas aquí */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
