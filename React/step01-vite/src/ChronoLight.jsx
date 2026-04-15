import React, { useState } from "react";

const ChronoLight = () => {
  const [time, setTime] = useState("Morning");

  const THEMES = {
    Morning: {
      bg: "#E6E9F0",
      accent: "#FF8C00",
      shadow: "20px 20px 60px #bec1c7, -20px -20px 60px #ffffff",
      text: "#2D3436",
    },
    Noon: {
      bg: "#FFFFFF",
      accent: "#00BFFF",
      shadow: "10px 10px 30px rgba(0,0,0,0.1)",
      text: "#000000",
    },
    Evening: {
      bg: "#2D3436",
      accent: "#FF4500",
      shadow: "inset 0 0 100px rgba(0,0,0,0.5)",
      text: "#F1F2F6",
    },
    Night: {
      bg: "#0F172A",
      accent: "#6366F1",
      shadow: "0 0 40px rgba(99,102,241,0.2)",
      text: "#94A3B8",
    },
  };

  return (
    <div
      className="ch-wrap"
      style={{ backgroundColor: THEMES[time].bg, color: THEMES[time].text }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;900&family=Space+Mono&display=swap');
        .ch-wrap { height: 100vh; transition: 1.5s cubic-bezier(0.16, 1, 0.3, 1); font-family: 'Inter', sans-serif; overflow: hidden; position: relative; }
        .ch-nav { padding: 3rem; display: flex; justify-content: space-between; font-family: 'Space Mono'; font-size: 0.7rem; letter-spacing: 0.3em; }
        .ch-controls { position: absolute; left: 4rem; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; gap: 2rem; z-index: 10; }
        .ch-btn { background: none; border: 1px solid currentColor; color: inherit; padding: 1rem; border-radius: 50%; width: 60px; height: 60px; cursor: pointer; transition: 0.3s; font-size: 0.6rem; opacity: 0.4; }
        .ch-btn.active { opacity: 1; border-width: 2px; transform: scale(1.2); }
        .ch-main { height: 100%; display: flex; align-items: center; justify-content: center; padding-left: 10rem; }
        .ch-object { width: 400px; aspect-ratio: 1/1; background: var(--bg); border-radius: 30px; transition: 1.5s; display: flex; align-items: center; justify-content: center; position: relative; }
        .ch-img { width: 80%; height: 80%; object-fit: contain; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.2)); transition: 1.5s; }
        .ch-info { position: absolute; right: 10%; width: 300px; }
        .ch-info h1 { font-size: 5rem; font-weight: 900; line-height: 0.8; margin-bottom: 2rem; letter-spacing: -3px; }
        .ch-info p { font-size: 0.9rem; opacity: 0.7; line-height: 1.6; }
        .light-effect { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; opacity: 0.5; transition: 1.5s; }
      `}</style>

      <nav className="ch-nav">
        <div>CHRONICLE_OF_LIGHT</div>
        <div>TIME: {time.toUpperCase()}</div>
      </nav>

      <div className="ch-controls">
        {Object.keys(THEMES).map((t) => (
          <button
            key={t}
            onClick={() => setTime(t)}
            className={`ch-btn ${time === t ? "active" : ""}`}
          >
            {t[0]}
          </button>
        ))}
      </div>

      <main className="ch-main">
        <div className="ch-object" style={{ boxShadow: THEMES[time].shadow }}>
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000"
            className="ch-img"
            alt="Object"
            style={{
              filter:
                time === "Night"
                  ? "brightness(0.5) contrast(1.2)"
                  : "brightness(1)",
            }}
          />
          <div
            className="light-effect"
            style={{
              background: `linear-gradient(135deg, ${THEMES[time].accent}22, transparent)`,
            }}
          />
        </div>
        <div className="ch-info">
          <h1 style={{ color: THEMES[time].accent }}>
            Pure
            <br />
            Sound
          </h1>
          <p>
            Experience how light redefines form. A minimal study of shadows and
            surfaces through the passage of time.
          </p>
        </div>
      </main>
    </div>
  );
};

export default ChronoLight;
