import React, { useState, useEffect } from "react";

const MonolithTheme = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 마우스 위치 추적 (스포트라이트 및 인터랙션용)
  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const EXHIBITS = [
    {
      id: "01",
      title: "SPHERE",
      desc: "A perfect mathematical form in absolute void.",
      color: "#FF4500",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
    },
    {
      id: "02",
      title: "CUBE",
      desc: "The rigid structure of human perception.",
      color: "#00F0FF",
      img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1200",
    },
    {
      id: "03",
      title: "VOID",
      desc: "The beauty of nothingness and space.",
      color: "#FF00E5",
      img: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1200",
    },
    {
      id: "04",
      title: "PRISM",
      desc: "Refraction of reality through light.",
      color: "#ADFF2F",
      img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200",
    },
  ];

  return (
    <div className="mono-wrap">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono&family=Playfair+Display:italic,wght@0,900;1,900&family=Inter:wght@900;400&display=swap');

        .mono-wrap { 
          background: #050505; 
          color: #fff; 
          min-height: 100vh; 
          font-family: 'Inter', sans-serif; 
          overflow-x: hidden;
          cursor: none; /* 커스텀 커서 사용을 위해 기본 커서 숨김 */
        }

        /* 커스텀 스포트라이트 커서 */
        .mono-cursor {
          position: fixed;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          left: ${mousePos.x}px;
          top: ${mousePos.y}px;
          transition: width 0.3s, height 0.3s;
        }

        .mono-nav {
          position: fixed;
          top: 0; width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 3rem 4rem;
          z-index: 1000;
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          mix-blend-difference: difference;
        }

        .mono-hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .mono-hero-text {
          font-size: 18vw;
          font-weight: 900;
          letter-spacing: -0.05em;
          line-height: 0.8;
          text-align: center;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
          transition: 0.8s;
        }

        .mono-hero:hover .mono-hero-text {
          color: #fff;
          -webkit-text-stroke: 1px #fff;
        }

        .mono-list {
          padding: 0 4rem 20rem 4rem;
          display: flex;
          flex-direction: column;
          gap: 40vh;
        }

        .mono-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .mono-item:nth-child(even) { flex-direction: row-reverse; }

        .mono-img-wrap {
          width: 55%;
          aspect-ratio: 1/1;
          position: relative;
          overflow: hidden;
          clip-path: inset(15% 15% 15% 15%); /* 초기 상태 여백 */
          transition: 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mono-item:hover .mono-img-wrap {
          clip-path: inset(0% 0% 0% 0%); /* 호버 시 가득 참 */
        }

        .mono-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) brightness(0.6);
          transition: 1.5s;
        }

        .mono-item:hover img {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.1);
        }

        .mono-content {
          width: 30%;
          position: relative;
          z-index: 10;
        }

        .mono-id {
          font-family: 'Space Mono', monospace;
          color: #444;
          font-size: 0.8rem;
          margin-bottom: 1.5rem;
          display: block;
        }

        .mono-title {
          font-size: 6rem;
          line-height: 0.9;
          margin-bottom: 2rem;
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .mono-desc {
          font-size: 0.9rem;
          color: #888;
          line-height: 1.8;
          max-width: 300px;
        }

        .mono-line {
          height: 1px;
          width: 0;
          background: #fff;
          margin-top: 3rem;
          transition: 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mono-item:hover .mono-line {
          width: 100%;
        }

        .mono-footer {
          padding: 6rem;
          text-align: center;
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          opacity: 0.2;
          letter-spacing: 0.6em;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        @media (max-width: 1024px) {
          .mono-item, .mono-item:nth-child(even) { flex-direction: column; gap: 3rem; }
          .mono-img-wrap, .mono-content { width: 100%; }
          .mono-hero-text { font-size: 25vw; }
          .mono-title { font-size: 4rem; }
        }
      `}</style>

      {/* 커스텀 마우스 효과 */}
      <div className="mono-cursor" />

      <nav className="mono-nav">
        <div>Monolith_Lab / v1.0</div>
        <div>Collective Archive</div>
      </nav>

      <section className="mono-hero">
        <h1 className="mono-hero-text">PURITY</h1>
      </section>

      <div className="mono-list">
        {EXHIBITS.map((item) => (
          <div key={item.id} className="mono-item">
            <div className="mono-img-wrap">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="mono-content">
              <span className="mono-id">{item.id}</span>
              <h2 className="mono-title">{item.title}</h2>
              <p className="mono-desc">{item.desc}</p>
              <div
                className="mono-line"
                style={{ backgroundColor: item.color }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <footer className="mono-footer">
        ESTABLISHED 2026 // SEOUL BASED STUDIO // ALL OBJECTS ARE VIRTUAL
      </footer>
    </div>
  );
};

export default MonolithTheme;
