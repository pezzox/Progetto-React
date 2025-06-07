// List of guided meditation sessions used in the app.
// Each object represents a session with its visual/audio assets, guidance, and tone.

const sessions = [
  {
    title: "Lo Spirito della Natura", // The Spirit of Nature
    image: "/images/green.jpg",
    video: "/videos/green.mp4",
    audio: "/sounds/green.mp3",
    duration: "15 minuti",
    feelings: "radicamento, freschezza mentale, connessione con l’ambiente",
    element:
      "Durante la meditazione, immagina le tue radici estendersi nel terreno sotto di te.\n\nCon ogni espirazione, visualizza un piccolo seme germogliare dentro il tuo petto e aprirsi lentamente.",
    mantra: "Sono parte del tutto." // I am part of the whole
  },
  {
    title: "Il Sognatore Cosmico", // The Cosmic Dreamer
    image: "/images/cosmic.jpg",
    video: "/videos/cosmic.mp4",
    audio: "/sounds/cosmic.mp3",
    duration: "20 minuti",
    feelings: "espansione, leggerezza, apertura mentale",
    element:
      "Dopo i primi minuti di respiro profondo, immagina di salire lentamente sopra il tuo corpo, attraversando strati di atmosfera e luce. Ogni livello rappresenta un pensiero che si dissolve.\n\nAlla fine, ti fermi nello spazio vuoto e silenzioso.\n\nEsercizio: visualizza ogni pensiero come una stella che esplode e si dissolve.",
    mantra: "Ogni pensiero è luce che passa." // Each thought is passing light
  },
  {
    title: "La Fiamma Interiore", // The Inner Flame
    image: "/images/flame.jpg",
    video: "/videos/flame.mp4",
    audio: "/sounds/flame.mp3",
    duration: "10 minuti",
    feelings: "energia, chiarezza, determinazione tranquilla",
    element:
      "Porta le mani sul cuore per i primi 3 minuti. Con ogni respiro, immagina una piccola fiamma accendersi e crescere dentro di te.\n\nAl culmine, visualizza questa luce espandersi nel tuo corpo fino a illuminare tutto intorno.",
    mantra: "Accolgo la mia forza." // I welcome my strength
  },
  {
    title: "La Guardiana della Luna", // The Moon Guardian
    image: "/images/moon.jpg",
    video: "/videos/moon.mp4",
    audio: "/sounds/moon.mp3",
    duration: "25 minuti",
    feelings: "rilassamento profondo, abbandono, dolcezza",
    element:
      "Ogni volta che inspiri, immagina la luce della luna entrare nel tuo corpo. Ad ogni espirazione, lasci andare tensioni, pensieri e rumore.\n\nA metà sessione, metti una mano sul ventre e una sul cuore. Rimani lì per 5 minuti, sentendo solo il respiro.\n\nRituale: concludi con una frase sussurrata: “Mi concedo il riposo.”",
    mantra: "Mi lascio cullare dalla notte." // I let the night cradle me
  },
  {
    title: "L’Osservatore Silenzioso", // The Silent Observer
    image: "/images/eye.jpg",
    video: "/videos/eye.mp4",
    audio: "/sounds/eye.mp3",
    duration: "12 minuti",
    feelings: "chiarezza mentale, distacco, presenza",
    element:
      "Fissa un punto immaginario tra le sopracciglia. Ogni volta che un pensiero arriva, osservalo senza giudizio, come se fosse una nuvola che passa.\n\nA metà, porta l’attenzione ai suoni attorno a te senza etichettarli.",
    mantra: "Io vedo. Io sono." // I see. I am.
  },
  {
    title: "L’Albero del Respiro", // The Tree of Breath
    image: "/images/golden.jpg",
    video: "/videos/golden.mp4",
    audio: "/sounds/golden.mp3",
    duration: "18 minuti",
    feelings: "equilibrio, armonia, vitalità silenziosa",
    element:
      "Sincronizza il respiro con una visualizzazione:\n\nInspira (rami che si aprono verso il cielo)\nEspira (radici che si estendono nella terra)\n\nOgni 4 cicli, immagina un cerchio di luce intorno a te che si espande lentamente.\n\nRitmo consigliato: 4 sec inspiro / 4 sec pausa / 4 sec espiro / 4 sec pausa (box breathing).",
    mantra: "Respiro. Radici. Luce." // Breathe. Roots. Light.
  }
]

export default sessions
