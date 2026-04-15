import React, { useState } from "react";

const FloatingLibrary = () => {
  const [hovered, setHovered] = useState(null);
  const BOOKS = [
    { id: "01", title: "METAMORPHOSIS", author: "FRANZ KAFKA", year: "1915" },
    { id: "02", title: "ULYSSES", author: "JAMES JOYCE", year: "1922" },
    { id: "03", title: "THE STRANGER", author: "ALBERT CAMUS", year: "1942" },
    { id: "04", title: "1984", author: "GEORGE ORWELL", year: "1949" },
  ];

  return (
    <div className="lib-wrap">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:italic,wght@1,900&family=Space+Mono&display=swap');
        .lib-wrap { background: #0a0a0a; color: #fff; height: 100vh; overflow: hidden; font-family: 'Space Mono', monospace; display: flex; flex-direction: column; }
        .lib-nav { padding: 3rem; display: flex; justify-content: space-between; font-size: 0.6rem; letter-spacing: 0.5em; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .lib-main { flex: 1; position: relative; display: flex; flex-direction: column; justify-content: center; padding: 0 10%; }
        .lib-item { position: relative; padding: 1.5rem 0; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.05); transition: 0.5s; }
        .lib-item:hover { border-color: #fff; padding-left: 2rem; }
        .lib-title { font-family: 'Playfair Display', serif; font-style: italic; font-size: clamp(3rem, 8vw, 8rem); line-height: 0.8; transition: 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .lib-item:hover .lib-title { transform: skewX(-10deg); color: #ff4500; }
        .lib-meta { position: absolute; right: 0; top: 50%; transform: translateY(-50%); text-align: right; opacity: 0; transition: 0.5s; }
        .lib-item:hover .lib-meta { opacity: 1; transform: translateY(-50%) translateX(-2rem); }
        .lib-bg-text { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 30vw; font-weight: 900; opacity: 0.02; pointer-events: none; z-index: 0; }
        .lib-list:hover .lib-item:not(:hover) { opacity: 0.1; filter: blur(5px); }
      `}</style>

      <nav className="lib-nav">
        <div>THE_FLOATING_INDEX</div>
        <div>SCANNING_VOL_01</div>
      </nav>

      <div className="lib-bg-text">
        {hovered !== null ? BOOKS[hovered].id : "INDEX"}
      </div>

      <main className="lib-main">
        <div className="lib-list">
          {BOOKS.map((book, idx) => (
            <div
              key={idx}
              className="lib-item"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="lib-title">{book.title}</div>
              <div className="lib-meta">
                <div style={{ fontSize: "0.8rem", fontWeight: 800 }}>
                  {book.author}
                </div>
                <div
                  style={{
                    fontSize: "0.6rem",
                    color: "#666",
                    marginTop: "0.5rem",
                  }}
                >
                  {book.year} — CLASSIC
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FloatingLibrary;
