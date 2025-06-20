// src/components/sessions/SessionsData.js
import greenImg   from "../../assets/images/green.jpg";
import greenVid   from "../../assets/videos/green.mp4";
import greenAud   from "../../assets/sounds/green.mp3";

import cosmicImg  from "../../assets/images/cosmic.jpg";
import cosmicVid  from "../../assets/videos/cosmic.mp4";
import cosmicAud  from "../../assets/sounds/cosmic.mp3";

import flameImg   from "../../assets/images/flame.jpg";
import flameVid   from "../../assets/videos/flame.mp4";
import flameAud   from "../../assets/sounds/flame.mp3";

import moonImg    from "../../assets/images/moon.jpg";
import moonVid    from "../../assets/videos/moon.mp4";
import moonAud    from "../../assets/sounds/moon.mp3";

import eyeImg     from "../../assets/images/eye.jpg";
import eyeVid     from "../../assets/videos/eye.mp4";
import eyeAud     from "../../assets/sounds/eye.mp3";

import goldenImg  from "../../assets/images/golden.jpg";
import goldenVid  from "../../assets/videos/golden.mp4";
import goldenAud  from "../../assets/sounds/golden.mp3";


const sessions = [
  {
    title: "Lo Spirito della Natura",
    image: greenImg,
    video: greenVid,
    audio: greenAud,
    duration: "15 minuti",
    feelings: "radicamento, freschezza mentale, connessione con l’ambiente",
    element:
      "Durante la meditazione, immagina le tue radici estendersi nel terreno sotto di te.\n\nCon ogni espirazione, visualizza un piccolo seme germogliare dentro il tuo petto e aprirsi lentamente.",
    mantra: "Sono parte del tutto."
  },
  {
    title: "Il Sognatore Cosmico",
    image: cosmicImg,
    video: cosmicVid,
    audio: cosmicAud,
    duration: "20 minuti",
    feelings: "espansione, leggerezza, apertura mentale",
    element:
      "Dopo i primi minuti di respiro profondo, immagina di salire lentamente sopra il tuo corpo, attraversando strati di atmosfera e luce...",
    mantra: "Ogni pensiero è luce che passa."
  },
  {
    title: "La Fiamma Interiore",
    image: flameImg,
    video: flameVid,
    audio: flameAud,
    duration: "10 minuti",
    feelings: "energia, chiarezza, determinazione tranquilla",
    element:
      "Porta le mani sul cuore per i primi 3 minuti. Con ogni respiro, immagina una piccola fiamma accendersi...",
    mantra: "Accolgo la mia forza."
  },
  {
    title: "La Guardiana della Luna",
    image: moonImg,
    video: moonVid,
    audio: moonAud,
    duration: "25 minuti",
    feelings: "rilassamento profondo, abbandono, dolcezza",
    element:
      "Ogni volta che inspiri, immagina la luce della luna entrare nel tuo corpo. Ad ogni espirazione, lasci andare tensioni...",
    mantra: "Mi lascio cullare dalla notte."
  },
  {
    title: "L’Osservatore Silenzioso",
    image: eyeImg,
    video: eyeVid,
    audio: eyeAud,
    duration: "12 minuti",
    feelings: "chiarezza mentale, distacco, presenza",
    element:
      "Fissa un punto immaginario tra le sopracciglia. Ogni volta che un pensiero arriva, osservalo senza giudizio...",
    mantra: "Io vedo. Io sono."
  },
  {
    title: "L’Albero del Respiro",
    image: goldenImg,
    video: goldenVid,
    audio: goldenAud,
    duration: "18 minuti",
    feelings: "equilibrio, armonia, vitalità silenziosa",
    element:
      "Sincronizza il respiro con una visualizzazione: Inspira (rami che si aprono) / Espira (radici nella terra)...",
    mantra: "Respiro. Radici. Luce."
  }
]

export default sessions
