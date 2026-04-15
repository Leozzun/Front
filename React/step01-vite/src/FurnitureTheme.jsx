import React, { useState } from "react";

const FurnitureTheme = () => {
  const [active, setActive] = useState("All");
  const DATA = [
    {
      id: "01",
      name: "Panton Chair",
      designer: "V. Panton",
      cat: "Chair",
      size: "tall",
      img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200",
    },
    {
      id: "02",
      name: "PH Artichoke",
      designer: "P. Henningsen",
      cat: "Light",
      size: "wide",
      img: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=1200",
    },
    {
      id: "03",
      name: "Standard Chair",
      designer: "Jean Prouvé",
      cat: "Chair",
      size: "small",
      img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1200",
    },
    {
      id: "04",
      name: "Togo Sofa",
      designer: "M. Ducaroy",
      cat: "Sofa",
      size: "large",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
    },
  ];

  return (
    <div className="v1-wrap">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:italic,wght@0,900;1,400&family=Inter:wght@300;800&display=swap');
        .v1-wrap { background: #fff; color: #111; font-family: 'Inter', sans-serif; }
        .v1-nav { position: fixed; top: 0; width: 100%; display: flex; justify-content: space-between; padding: 2rem 4rem; z-index: 100; mix-blend-difference: revert; background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); }
        .v1-logo { font-weight: 800; letter-spacing: -1px; font-size: 1.2rem; }
        .v1-filters button { background: none; border: none; margin-left: 2rem; font-weight: 800; color: #ccc; cursor: pointer; font-size: 0.7rem; text-transform: uppercase; transition: 0.3s; }
        .v1-filters button.active { color: #ff4500; }
        .v1-hero { height: 80vh; display: flex; flex-direction: column; justify-content: center; padding: 0 4rem; border-bottom: 1px solid #eee; }
        .v1-hero h1 { font-size: clamp(4rem, 10vw, 12rem); line-height: 0.85; font-weight: 300; letter-spacing: -0.05em; }
        .v1-hero h1 span { font-family: 'Playfair Display', serif; font-style: italic; font-weight: 400; }
        .v1-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 4rem; padding: 8rem 4rem; }
        .v1-card { grid-column: span 4; transition: 0.5s; }
        .v1-card.large { grid-column: span 8; }
        .v1-img-box { position: relative; width: 100%; aspect-ratio: 10/12; overflow: hidden; background: #f5f5f5; clip-path: inset(0 0 0 0); transition: 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .v1-card:hover .v1-img-box { clip-path: inset(2% 2% 2% 2%); }
        .v1-img-box img { width: 100%; height: 100%; object-fit: cover; transition: 1.2s; }
        .v1-card:hover img { transform: scale(1.1); }
        .v1-info { margin-top: 1.5rem; display: flex; justify-content: space-between; border-top: 1px solid #111; padding-top: 1rem; }
        .v1-info h3 { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 400; }
        .v1-cat { font-size: 0.6rem; font-weight: 800; color: #ff4500; }
      `}</style>
      <nav className="v1-nav">
        <div className="v1-logo">ARCHIVE.01</div>
        <div className="v1-filters">
          {["All", "Chair", "Light", "Sofa"].map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={active === c ? "active" : ""}
            >
              {c}
            </button>
          ))}
        </div>
      </nav>
      <header className="v1-hero">
        <h1>
          THE ART OF
          <br />
          <span>DWELLING</span>
        </h1>
      </header>
      <main className="v1-grid">
        {DATA.filter((d) => active === "All" || d.cat === active).map(
          (item) => (
            <div key={item.id} className={`v1-card ${item.size}`}>
              <div className="v1-img-box">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="v1-info">
                <div>
                  <span className="v1-cat">
                    {item.id} // {item.cat}
                  </span>
                  <h3>{item.name}</h3>
                </div>
                <span style={{ fontWeight: 800 }}>${item.price}</span>
              </div>
            </div>
          ),
        )}
      </main>
    </div>
  );
};

export default FurnitureTheme;
