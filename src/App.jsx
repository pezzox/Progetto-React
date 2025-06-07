"use client"

import { useState } from "react"
import './styles/main.scss'; 


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
      case "settings":
        return <Settings />
      case "stats":
        return <Stats />
      default:
        return <Home setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </Layout>
  )
}

export default App
