import React, { useState } from "react";

const HotelArchive = () => {
  const [view, setView] = useState(0);
  const STAYS = [
    {
      name: "THE SILENCE",
      loc: "Kyoto, Japan",
      vibe: "Zen",
      color: "#F4F1EA",
      img: "https://images.unsplash.com/photo-1544144433-d50aff500b91?q=80&w=1200",
    },
    {
      name: "RAW CONCRETE",
      loc: "Berlin, Germany",
      vibe: "Industrial",
      color: "#2D2D2D",
      img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200",
    },
    {
      name: "NOON LIGHT",
      loc: "Santorini, Greece",
      vibe: "Pure",
      color: "#FFFFFF",
      img: "https://images.unsplash.com/photo-1498503182468-39912338c89c?q=80&w=1200",
    },
  ];

  return (
    <div
      className="hotel-wrap"
      style={{
        backgroundColor: STAYS[view].color,
        color: view === 1 ? "#fff" : "#111",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:italic,wght@0,900;1,400&family=Inter:wght@300;800&display=swap');
        .hotel-wrap { height: 100vh; transition: 1s cubic-bezier(0.16, 1, 0.3, 1); overflow: hidden; font-family: 'Inter', sans-serif; position: relative; }
        .hotel-nav { padding: 3rem; display: flex; justify-content: space-between; font-weight: 800; font-size: 0.7rem; letter-spacing: 0.3em; z-index: 10; position: relative; }
        .hotel-main { display: flex; height: calc(100vh - 100px); align-items: center; padding: 0 10%; gap: 5%; }
        .hotel-img-frame { width: 50%; aspect-ratio: 4/5; overflow: hidden; position: relative; clip-path: inset(0 0 0 0); transition: 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .hotel-img-frame img { width: 100%; height: 100%; object-fit: cover; transition: 1.5s; }
        .hotel-content { width: 40%; }
        .hotel-vibe { font-family: 'Playfair Display', serif; font-style: italic; font-size: 1.2rem; color: #ff4500; margin-bottom: 1rem; display: block; }
        .hotel-name { font-size: 7vw; font-weight: 300; line-height: 0.9; letter-spacing: -4px; margin-bottom: 2rem; }
        .hotel-loc { font-size: 0.8rem; letter-spacing: 0.2em; opacity: 0.6; }
        .hotel-footer { position: absolute; bottom: 3rem; left: 3rem; display: flex; gap: 1rem; }
        .hotel-dot { width: 50px; height: 2px; background: currentColor; opacity: 0.2; cursor: pointer; transition: 0.3s; }
        .hotel-dot.active { opacity: 1; height: 4px; background: #ff4500; }
        .hotel-bg-text { position: absolute; top: 50%; right: -5%; transform: translateY(-50%); font-size: 20vw; font-weight: 900; opacity: 0.03; pointer-events: none; white-space: nowrap; }
      `}</style>

      <nav className="hotel-nav">
        <div>STAY_COLLECTIVE</div>
        <div>BOOKING / 2026</div>
      </nav>

      <div className="hotel-bg-text">{STAYS[view].vibe}</div>

      <main className="hotel-main">
        <div className="hotel-img-frame">
          <img
            key={view}
            src={STAYS[view].img}
            alt="Stay"
            style={{ animation: "reveal 1.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
          />
        </div>
        <div className="hotel-content">
          <span className="hotel-vibe">{STAYS[view].vibe} Atmosphere</span>
          <h1 className="hotel-name">{STAYS[view].name}</h1>
          <p className="hotel-loc">{STAYS[view].loc}</p>
        </div>
      </main>

      <div className="hotel-footer">
        {STAYS.map((_, i) => (
          <div
            key={i}
            className={`hotel-dot ${view === i ? "active" : ""}`}
            onClick={() => setView(i)}
          />
        ))}
      </div>

      <style>{`
        @keyframes reveal {
          from { transform: scale(1.2); clip-path: inset(100% 0 0 0); }
          to { transform: scale(1); clip-path: inset(0 0 0 0); }
        }
      `}</style>
    </div>
  );
};

export default HotelArchive;
