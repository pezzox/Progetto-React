"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X } from "lucide-react"

export default function MindfulMoments() {
  const [currentPage, setCurrentPage] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const showPage = (pageId: string) => {
    setCurrentPage(pageId)
    setMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={() => showPage("home")}
              className="flex items-center gap-3 text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <span className="text-3xl">🧘</span>
              <span>Mindful Moments</span>
            </button>

            <nav
              className={`${mobileMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-6 absolute md:relative top-full md:top-auto left-0 right-0 md:left-auto md:right-auto bg-white md:bg-transparent p-6 md:p-0 shadow-lg md:shadow-none`}
            >
              {[
                { id: "home", label: "Home" },
                { id: "timer", label: "Timer" },
                { id: "sessions", label: "Sessioni" },
                { id: "settings", label: "Impostazioni" },
                { id: "stats", label: "Statistiche" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => showPage(item.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    currentPage === item.id
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Home Page */}
      {currentPage === "home" && (
        <div>
          {/* Hero Section */}
          <section className="h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 flex items-center justify-center text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22>%3Cdefs%3E%3CradialGradient id=%22g1%22 cx=%2250%25%22 cy=%2230%25%22>%3Cstop offset=%220%25%22 stopColor=%22%23a8e6cf%22 stopOpacity=%220.3%22/%3E%3Cstop offset=%22100%25%22 stopColor=%22%2364b5f6%22 stopOpacity=%220.1%22/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill=%22url(%23g1)%22 width=%22100%25%22 height=%22100%25%22/%3E%3Ccircle cx=%22300%22 cy=%22200%22 r=%22150%22 fill=%22%23ffffff%22 opacity=%220.1%22/%3E%3Ccircle cx=%22900%22 cy=%22500%22 r=%22200%22 fill=%22%23ffffff%22 opacity=%220.05%22/%3E%3Cpath d=%22M0,600 Q300,400 600,600 T1200,600 L1200,800 L0,800 Z%22 fill=%22%23ffffff%22 opacity=%220.1%22/%3E%3C/svg%3E')] bg-cover bg-center"></div>

            <div className="max-w-4xl mx-auto px-4 z-10">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in slide-in-from-bottom-8 duration-1000">
                Trova la Tua Pace Interiore
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 animate-in slide-in-from-bottom-8 duration-1000 delay-200">
                Scopri il potere trasformativo della meditazione con la nostra piattaforma dedicata al benessere mentale
                e alla crescita personale.
              </p>
              <Button
                onClick={() => showPage("timer")}
                className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 backdrop-blur-md px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl animate-in slide-in-from-bottom-8 duration-1000 delay-500"
              >
                Inizia Ora
              </Button>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-8 h-8 border-r-2 border-b-2 border-white transform rotate-45"></div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">I Benefici della Meditazione</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  La scienza conferma: la meditazione regolare trasforma corpo e mente, portando benefici duraturi nella
                  vita quotidiana.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🧠",
                    title: "Migliora la Concentrazione",
                    description:
                      "Sviluppa una mente più focalizzata e attenta, aumentando la produttività e riducendo le distrazioni nella vita quotidiana.",
                  },
                  {
                    icon: "😌",
                    title: "Riduce lo Stress",
                    description:
                      "Abbassa i livelli di cortisolo e attiva la risposta di rilassamento naturale del corpo, portando serenità e calma interiore.",
                  },
                  {
                    icon: "❤️",
                    title: "Migliora il Benessere",
                    description:
                      "Aumenta la produzione di endorfine e serotonina, migliorando l'umore e la qualità generale della vita.",
                  },
                  {
                    icon: "💤",
                    title: "Sonno Migliore",
                    description:
                      "Favorisce un riposo più profondo e rigenerante, aiutando a combattere l'insonnia e i disturbi del sonno.",
                  },
                  {
                    icon: "🎯",
                    title: "Maggiore Consapevolezza",
                    description:
                      "Sviluppa la mindfulness e la presenza mentale, aiutandoti a vivere pienamente ogni momento della giornata.",
                  },
                  {
                    icon: "🌱",
                    title: "Crescita Personale",
                    description:
                      "Favorisce l'autoconoscenza e lo sviluppo emotivo, creando una base solida per la crescita personale continua.",
                  },
                ].map((benefit, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                  >
                    <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                    <CardContent className="p-8 text-center">
                      <div className="text-5xl mb-6">{benefit.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Le Nostre Funzionalità</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  Tutto ciò di cui hai bisogno per iniziare e mantenere una pratica meditativa costante e gratificante.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: "⏱️",
                    title: "Timer Personalizzabile",
                    description: "Imposta la durata perfetta per le tue sessioni, da 5 minuti a un'ora completa.",
                  },
                  {
                    icon: "🎵",
                    title: "Suoni Rilassanti",
                    description: "Scegli tra una varietà di suoni naturali per accompagnare la tua meditazione.",
                  },
                  {
                    icon: "📱",
                    title: "Design Responsive",
                    description: "Medita ovunque tu sia, su qualsiasi dispositivo, con un'esperienza ottimizzata.",
                  },
                  {
                    icon: "📊",
                    title: "Traccia i Progressi",
                    description: "Monitora le tue sessioni e celebra i traguardi raggiunti nel tuo percorso.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="text-center p-6">
                    <div className="text-4xl mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="opacity-90 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quote Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <blockquote className="text-3xl md:text-4xl font-light italic text-gray-800 mb-6 leading-relaxed">
                "La pace viene dall'interno. Non cercarla all'esterno."
              </blockquote>
              <cite className="text-xl text-indigo-600 font-semibold">— Buddha</cite>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-16">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-400 mb-4">Mindful Moments</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    La tua piattaforma di fiducia per la meditazione e il benessere mentale. Inizia oggi il tuo viaggio
                    verso una vita più serena e consapevole.
                  </p>
                  <div className="flex gap-4">
                    {["📘", "📷", "🐦", "📺"].map((icon, index) => (
                      <button
                        key={index}
                        className="w-10 h-10 bg-gray-700 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-colors duration-300"
                      >
                        {icon}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-indigo-400 mb-4">Navigazione</h3>
                  <ul className="space-y-2">
                    {[
                      { id: "home", label: "Home" },
                      { id: "timer", label: "Timer Meditazione" },
                      { id: "sessions", label: "Sessioni Guidate" },
                      { id: "settings", label: "Impostazioni" },
                      { id: "stats", label: "Statistiche" },
                    ].map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => showPage(item.id)}
                          className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-indigo-400 mb-4">Risorse</h3>
                  <ul className="space-y-2">
                    {[
                      "Guida per Principianti",
                      "Blog sulla Meditazione",
                      "Articoli Scientifici",
                      "Community",
                      "FAQ",
                    ].map((item, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-indigo-400 mb-4">Supporto</h3>
                  <ul className="space-y-2">
                    {["Centro Assistenza", "Contattaci", "Privacy Policy", "Termini di Servizio", "Cookie Policy"].map(
                      (item, index) => (
                        <li key={index}>
                          <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                            {item}
                          </a>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-8 text-center">
                <p className="text-gray-400">
                  © 2024 Mindful Moments. Tutti i diritti riservati. Progettato con ❤️ per il tuo benessere.
                </p>
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* Other Pages */}
      {currentPage !== "home" && (
        <div className="pt-24 min-h-screen bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                {currentPage === "timer" && "🧘 Timer Meditazione"}
                {currentPage === "sessions" && "🎯 Sessioni Guidate"}
                {currentPage === "settings" && "⚙️ Impostazioni"}
                {currentPage === "stats" && "📊 Statistiche"}
              </h1>
              <Card className="p-12">
                <CardContent className="text-center">
                  <p className="text-lg text-gray-600">
                    {currentPage === "timer" &&
                      "Qui sarà implementato il timer per la meditazione con tutte le funzionalità richieste."}
                    {currentPage === "sessions" && "Qui saranno le sessioni di meditazione guidata."}
                    {currentPage === "settings" && "Qui saranno le impostazioni dell'applicazione."}
                    {currentPage === "stats" && "Qui saranno visualizzate le statistiche delle sessioni."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
