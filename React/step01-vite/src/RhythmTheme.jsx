import React, { useState } from "react";

const RhythmTheme = () => {
  const [curr, setCurr] = useState(0);
  const ALBUMS = [
    {
      title: "Midnights",
      artist: "Taylor Swift",
      color: "#2D3E50",
      img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1200",
    },
    {
      title: "Blonde",
      artist: "Frank Ocean",
      color: "#4A5D23",
      img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1200",
    },
    {
      title: "After Hours",
      artist: "The Weeknd",
      color: "#8B0000",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200",
    },
  ];

  return (
    <div className="v3-wrap" style={{ backgroundColor: ALBUMS[curr].color }}>
      <style>{`
        .v3-wrap { height: 100vh; display: flex; flex-direction: column; transition: 1s ease; overflow: hidden; color: #fff; font-family: 'Inter', sans-serif; }
        .v3-nav { padding: 3rem; display: flex; justify-content: space-between; font-weight: 900; letter-spacing: 0.2em; font-size: 0.7rem; }
        .v3-main { flex: 1; display: flex; align-items: center; justify-content: center; position: relative; }
        .v3-bg-text { position: absolute; font-size: 25vw; font-weight: 900; opacity: 0.05; white-space: nowrap; pointer-events: none; }
        .v3-card { width: 400px; z-index: 10; text-align: center; }
        .v3-img-wrap { width: 100%; aspect-ratio: 1/1; box-shadow: 0 50px 100px rgba(0,0,0,0.5); border-radius: 4px; overflow: hidden; margin-bottom: 3rem; }
        .v3-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
        .v3-info h2 { font-size: 3rem; font-weight: 900; letter-spacing: -2px; margin-bottom: 0.5rem; }
        .v3-info p { opacity: 0.6; letter-spacing: 0.1em; text-transform: uppercase; font-size: 0.8rem; }
        .v3-controls { padding: 4rem; display: flex; justify-content: center; gap: 2rem; }
        .v3-dot { width: 12px; height: 12px; border-radius: 50%; border: 2px solid #fff; cursor: pointer; transition: 0.3s; }
        .v3-dot.active { background: #fff; width: 40px; border-radius: 10px; }
      `}</style>
      <nav className="v3-nav">
        <div>RHYTHM_CORE</div>
        <div>2026 EDITION</div>
      </nav>
      <main className="v3-main">
        <div className="v3-bg-text">{ALBUMS[curr].title}</div>
        <div className="v3-card">
          <div className="v3-img-wrap">
            <img
              key={curr}
              src={ALBUMS[curr].img}
              alt={ALBUMS[curr].title}
              style={{ animation: "fadeUp 1s forwards" }}
            />
          </div>
          <div className="v3-info">
            <h2>{ALBUMS[curr].title}</h2>
            <p>{ALBUMS[curr].artist}</p>
          </div>
        </div>
      </main>
      <div className="v3-controls">
        {ALBUMS.map((_, i) => (
          <div
            key={i}
            className={`v3-dot ${curr === i ? "active" : ""}`}
            onClick={() => setCurr(i)}
          />
        ))}
      </div>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default RhythmTheme;
