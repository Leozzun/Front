import React, { useState } from "react";

const Synesthesia = () => {
  const [mood, setMood] = useState("Jazz");

  const MOOD_DATA = {
    Jazz: {
      color: "#E8DED1",
      accent: "#5D4037",
      font: "'Playfair Display', serif",
      shape: "50% 50% 30% 70% / 50% 30% 70% 50%",
    },
    Techno: {
      color: "#000000",
      accent: "#00FF41",
      font: "'Space Mono', monospace",
      shape: "0% 0% 0% 0%",
    },
    Ambient: {
      color: "#F0F4F8",
      accent: "#90CDF4",
      font: "'Inter', sans-serif",
      shape: "40% 60% 70% 30% / 40% 40% 60% 60%",
    },
  };

  return (
    <div
      className="syn-wrap"
      style={{
        backgroundColor: MOOD_DATA[mood].color,
        color: MOOD_DATA[mood].accent,
        fontFamily: MOOD_DATA[mood].font,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:italic,wght@1,900&family=Space+Mono&family=Inter:wght@900&display=swap');
        .syn-wrap { height: 100vh; transition: 1s cubic-bezier(0.16, 1, 0.3, 1); display: flex; flex-direction: column; overflow: hidden; }
        .syn-nav { padding: 3rem; display: flex; justify-content: center; gap: 4rem; z-index: 10; }
        .syn-tab { background: none; border: none; font-family: inherit; color: inherit; font-weight: 900; cursor: pointer; font-size: 1.2rem; opacity: 0.3; transition: 0.5s; }
        .syn-tab.active { opacity: 1; letter-spacing: 0.2em; }
        .syn-main { flex: 1; display: flex; align-items: center; justify-content: center; position: relative; }
        .syn-visual { width: 500px; height: 500px; background: currentColor; transition: 1.5s cubic-bezier(0.16, 1, 0.3, 1); opacity: 0.1; position: absolute; border-radius: ${MOOD_DATA[mood].shape}; }
        .syn-content { position: relative; z-index: 5; text-align: center; }
        .syn-content h1 { font-size: 10rem; line-height: 1; margin: 0; transition: 0.8s; }
        .syn-content p { margin-top: 2rem; letter-spacing: 0.5em; font-size: 0.8rem; }
        .glitch-text { animation: ${mood === "Techno" ? "glitch 0.2s infinite" : "none"}; }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(-5px, -5px); }
          60% { transform: translate(5px, 5px); }
          80% { transform: translate(5px, -5px); }
          100% { transform: translate(0); }
        }
      `}</style>

      <nav className="syn-nav">
        {["Jazz", "Techno", "Ambient"].map((m) => (
          <button
            key={m}
            onClick={() => setMood(m)}
            className={`syn-tab ${mood === m ? "active" : ""}`}
          >
            {m}
          </button>
        ))}
      </nav>

      <main className="syn-main">
        <div className="syn-visual" />
        <div className="syn-content">
          <p>CURRENT_VIBE</p>
          <h1 className="glitch-text">{mood.toUpperCase()}</h1>
          <p>TRANSFERENCE OF SENSES</p>
        </div>
      </main>
    </div>
  );
};

export default Synesthesia;
