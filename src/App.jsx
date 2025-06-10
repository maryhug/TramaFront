import "./App.css";
import React from "react";
import Header from "./components/Header";
// import Busquedas from "./pages/Busquedas";
// import Login from "./pages/Login";
import DiscoverSection from "./pages/Discover"


function App() {
  return (
      <div>
          <Header />
        <DiscoverSection />

        {/*
        <Header />
        */}
    </div>
  );
}

export default App;
