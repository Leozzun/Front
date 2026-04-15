import React, { useState, useEffect } from "react";

const MonolithShowcase = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // 마우스 위치 추적 (Spotlight 효과용)
  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const EXHIBITS = [
    {
      id: "01",
      title: "SPHERE",
      desc: "Pure geometry in void.",
      color: "#FF4500",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
    },
    {
      id: "02",
      title: "CUBE",
      desc: "Rigid structure of thought.",
      color: "#00F0FF",
      img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1200",
    },
    {
      id: "03",
      title: "VOID",
      desc: "Nothingness as a form.",
      color: "#FF00E5",
      img: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1200",
    },
  ];

  return (
    <div className="mono-container">
      {/* 커스텀 커서/스포트라이트 */}
      <div
        className="mono-spotlight"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      <nav className="mono-nav">
        <div className="mono-logo font-mono">MONOLITH_LAB</div>
        <div className="mono-menu">INDEX / ARCHIVE / INFO</div>
      </nav>

      <section className="mono-hero">
        <h1 className="mono-hero-text">ESSENCE</h1>
      </section>

      <div className="mono-list">
        {EXHIBITS.map((item) => (
          <div key={item.id} className="mono-item">
            <div className="mono-img-wrap">
              <img src={item.img} alt={item.title} />
              <div
                className="mono-overlay"
                style={{
                  background: `radial-gradient(circle at center, transparent, ${item.color}33)`,
                }}
              ></div>
            </div>
            <div className="mono-content">
              <span className="mono-id tracking-widest">{item.id}</span>
              <h2 className="mono-title serif-text">{item.title}</h2>
              <p className="mono-desc">{item.desc}</p>
              <div
                className="mono-line"
                style={{ backgroundColor: item.color }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <footer className="mono-footer font-mono">
        SYSTEM READY // NO BACKEND REQUIRED // DESIGN FIRST
      </footer>
    </div>
  );
};

export default MonolithShowcase;
