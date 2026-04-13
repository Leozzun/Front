import React, { useState } from "react";

const Archive = () => {
  const [mood, setMood] = useState("Quiet");

  const MOOD_STYLES = {
    Quiet: { bg: "#F4F1EA", accent: "#5D6D7E", text: "#2C3E50" },
    Bright: { bg: "#FFF9E6", accent: "#D4AC0D", text: "#7D6608" },
    Cozy: { bg: "#FDF2F2", accent: "#E67E22", text: "#641E16" },
  };

  const STORES = [
    {
      id: 1,
      name: "Index Books",
      loc: "Seongsu",
      desc: "A place where typography meets quietude.",
      img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200",
    },
    {
      id: 2,
      name: "Storage Book & Film",
      loc: "HBC",
      desc: "Deep curation of independent films and books.",
      img: "https://images.unsplash.com/photo-1507733440662-3bd42ec74f51?q=80&w=1200",
    },
  ];

  return (
    <div
      className="v3-container"
      style={{
        backgroundColor: MOOD_STYLES[mood].bg,
        color: MOOD_STYLES[mood].text,
      }}
    >
      <nav className="v3-nav">
        <div className="v3-logo">ARCHIVE_01</div>
        <div className="v3-mood-selector">
          {Object.keys(MOOD_STYLES).map((m) => (
            <button
              key={m}
              onClick={() => setMood(m)}
              className={mood === m ? "active" : ""}
              style={{ borderColor: MOOD_STYLES[mood].accent }}
            >
              {m}
            </button>
          ))}
        </div>
      </nav>

      <section className="v3-content">
        <div className="v3-header">
          <p>Find your vibe in Seoul</p>
          <h1 style={{ color: MOOD_STYLES[mood].accent }}>
            Selected Bookstores
          </h1>
        </div>

        <div className="v3-list">
          {STORES.map((s) => (
            <div key={s.id} className="v3-store-item">
              <div className="v3-img-wrap">
                <img src={s.img} alt={s.name} />
              </div>
              <div className="v3-text-wrap">
                <span className="v3-loc">{s.loc}</span>
                <h2>{s.name}</h2>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Archive;
