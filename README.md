# 🧘 Mindful Moments

Mindful Moments è una web app per la meditazione che ti aiuta a coltivare benessere mentale, presenza e tranquillità. Offre timer personalizzabili, sessioni guidate ispirate a sei archetipi meditativi, e un sistema di tracciamento dei tuoi progressi — tutto con un design semplice, elegante e responsivo.

---

## 🌐 Link utili

- **🔗 GitHub Repository**: (https://github.com/pezzox)  
- **🚀 Deploy Live**: _[inserisci qui il link al sito online]_

---

## ✨ Funzionalità principali

- ⏱️ **Timer Personalizzabile**  
  Scegli la durata della tua sessione da 5 a 60 minuti, con suoni rilassanti opzionali.

- 🧘‍♂️ **Sessioni Guidate**  
  Sei esperienze ispirazionali, ognuna con un’immagine simbolica, una descrizione evocativa e una durata ottimizzata.

- 📊 **Statistiche Interattive**  
  Visualizza i tuoi progressi, traccia lo streak settimanale e analizza l’uso dei suoni.

- 💬 **Citazioni Ispirazionali**  
  Una nuova frase ogni 5 secondi per accompagnarti con parole di saggezza.


---

## 📁 Struttura del progetto

+---public
|   |   favicon.ico
|   |   index.html
|   +---images
|   |       cosmic.jpg
|   |       eye.jpg
|   |       flame.jpg
|   |       golden.jpg
|   |       green.jpg
|   |       moon.jpg
|   |       
|   +---sounds
|   |       cosmic.mp3
|   |       eye.mp3
|   |       flame.mp3
|   |       golden.mp3
|   |       green.mp3
|   |       moon.mp3
|   |       
|   \---videos
|           cosmic.mp4
|           eye.mp4
|           flame.mp4
|           golden.mp4
|           green.mp4
|           moon.mp4
|           
+---src
|   |   App.jsx
|   |   index.js
|   |   main.jsx
|   |   
|   +---components
|   |   +---home
|   |   |   |   BenefitsSection.jsx
|   |   |   |   FeaturesSection.jsx
|   |   |   |   HeroSection.jsx
|   |   |   |   QuoteSection.jsx
|   |   |   |   
|   |   |   \---scss
|   |   |           BenefitsSection.scss
|   |   |           FeaturesSection.scss
|   |   |           HeroSection.scss
|   |   |           QuoteSection.scss
|   |   |           
|   |   +---scss
|   |   |       Layout.scss
|   |   |       MeditationTimer.scss
|   |   |       
|   |   +---sessions
|   |   |   |   FullSessionView.jsx
|   |   |   |   MeditationPopup.jsx
|   |   |   |   SessionCard.jsx
|   |   |   |   SessionsData.js
|   |   |   |   
|   |   |   \---scss
|   |   |           FullSessionView.scss
|   |   |           MeditationPopup.scss
|   |   |           
|   |   +---shared
|   |   |   |   Footer.jsx
|   |   |   |   Header.jsx
|   |   |   |   
|   |   |   \---scss
|   |   |           Footer.scss
|   |   |           Header.scss
|   |   |           
|   |   +---stats
|   |   |   |   DailyChart.jsx
|   |   |   |   Reset.jsx
|   |   |   |   SessionList.jsx
|   |   |   |   SoundDistribution.jsx
|   |   |   |   SummaryCard.jsx
|   |   |   |   
|   |   |   \---scss
|   |   |           DailyChart.scss
|   |   |           Reset.scss
|   |   |           SessionList.scss
|   |   |           SoundDistribution.scss
|   |   |           SummaryCard.scss
|   |   |           
|   |   \---timer
|   |           MeditationTimer.jsx
|   |           
|   +---hooks
|   |       useTimer.js
|   |       
|   +---pages
|   |   |   Home.jsx
|   |   |   Sessions.jsx
|   |   |   Stats.jsx
|   |   |   Timer.jsx
|   |   |   
|   |   \---scss
|   |           Home.scss
|   |           Sessions.scss
|   |           Stats.scss
|   |           Timer.scss
|   |           
|   \---styles
| 	    mixins.scss
|           App.scss
|           globals.scss
|           main.scss
|           _variables.scss
|           
\---styles
        globals.css
        globals.scss
        


---

## 🛠️ Tecnologie usate

- **React**
- **SCSS** (`@use` e variabili)
- **Tailwind CSS** (solo base e utilities)
- **Recharts** per i grafici
- **LocalStorage** per la persistenza
- **Design responsive** completo

---

## ⚙️ Avvio del progetto

```bash
# 1. Clona il repository
git clone https://github.com/tuo-username/mindful-moments.git

# 2. Entra nella cartella
cd mindful-moments

# 3. Installa le dipendenze
npm install

# 4. Avvia il server
npm run dev
```

L'app sarà disponibile su `http://localhost:3000`

---

## 💾 Gestione dei dati

Le sessioni vengono salvate localmente nel browser, sotto la chiave `meditationSessions`:

[
  {
    "date": "2025-06-11",
    "duration": 15,
    "sound": "rain"
  }
]

---

## 🧭 Navigazione

- **Home** — Introduzione + call to action
- **Timer** — Imposta e avvia la tua meditazione
- **Sessioni** — Seleziona una meditazione guidata
- **Statistiche** — Consulta i tuoi progressi

---

