import React, { useState } from "react";

const FurnitureGallery = () => {
  const [filter, setFilter] = useState("All");

  const DATA = [
    {
      id: 1,
      name: "Panton Chair",
      designer: "Verner Panton",
      price: "1,250",
      cat: "Chair",
      size: "tall",
      img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200",
    },
    {
      id: 2,
      name: "Akari Light",
      designer: "Isamu Noguchi",
      price: "890",
      cat: "Lighting",
      size: "wide",
      img: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=1200",
    },
    {
      id: 3,
      name: "Standard Chair",
      designer: "Jean Prouvé",
      price: "980",
      cat: "Chair",
      size: "small",
      img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1200",
    },
    {
      id: 4,
      name: "Togo Sofa",
      designer: "Michel Ducaroy",
      price: "4,200",
      cat: "Sofa",
      size: "large",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
    },
  ];

  const filtered =
    filter === "All" ? DATA : DATA.filter((d) => d.cat === filter);

  return (
    <div className="v1-container">
      <nav className="v1-nav">
        <div className="v1-logo">OBJECT_ARCHIVE</div>
        <div className="v1-filters">
          {["All", "Chair", "Lighting", "Sofa"].map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={filter === c ? "active" : ""}
            >
              {c}
            </button>
          ))}
        </div>
      </nav>

      <header className="v1-hero">
        <h1 className="v1-title">
          The Art of <span>Rest</span>
        </h1>
        <p className="v1-desc">
          Curated selection of timeless furniture pieces for modern spaces.
        </p>
      </header>

      <main className="v1-grid">
        {filtered.map((item) => (
          <div key={item.id} className={`v1-card ${item.size}`}>
            <div className="v1-img-box">
              <img src={item.img} alt={item.name} />
              <div className="v1-overlay">Explore Component</div>
            </div>
            <div className="v1-info">
              <span className="v1-cat">
                {item.cat} — 0{item.id}
              </span>
              <div className="v1-flex">
                <h3>{item.name}</h3>
                <span className="v1-price">${item.price}</span>
              </div>
              <p className="v1-designer">By {item.designer}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default FurnitureGallery;
