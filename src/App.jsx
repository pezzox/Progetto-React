"use client"
import { useState } from "react";
import "./styles/main.scss";

import Home from "./pages/Home";
import Timer from "./pages/Timer";
import Sessions from "./pages/Sessions";
import Stats from "./pages/Stats";

import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";




function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />
      case "timer":
        return <Timer />
      case "sessions":
        return <Sessions />
      case "stats":
        return <Stats />
      default:
        return <Home setCurrentPage={setCurrentPage} />
    }
  }

 return (
  <>
    <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
    {renderPage()}
    <Footer setCurrentPage={setCurrentPage} />
  </>
);


}

export default App
