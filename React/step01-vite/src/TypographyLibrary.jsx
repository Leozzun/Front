import React, { useState } from "react";

const TypographyLibrary = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const BOOKS = [
    {
      title: "METAMORPHOSIS",
      author: "Franz Kafka",
      year: "1915",
      quote: "As Gregor Samsa awoke one morning from uneasy dreams...",
    },
    {
      title: "ULYSSES",
      author: "James Joyce",
      year: "1922",
      quote: "Stately, plump Buck Mulligan came from the stairhead...",
    },
    {
      title: "THE STRANGER",
      author: "Albert Camus",
      year: "1942",
      quote: "Mother died today. Or maybe yesterday, I don't know.",
    },
    {
      title: "1984",
      author: "George Orwell",
      year: "1949",
      quote:
        "It was a bright cold day in April, and the clocks were striking thirteen.",
    },
  ];

  return (
    <div className="typo-wrap">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono&family=Inter:wght@900&display=swap');
        
        .typo-wrap { 
          background: #000; color: #fff; min-height: 100vh; 
          font-family: 'Inter', sans-serif; overflow: hidden;
          padding: 4rem; display: flex; flex-direction: column; justify-content: center;
        }

        .typo-nav {
          position: fixed; top: 3rem; left: 4rem; right: 4rem;
          display: flex; justify-content: space-between;
          font-family: 'Space Mono', monospace; font-size: 0.7rem; letter-spacing: 0.4em;
          z-index: 10;
        }

        .typo-bg-quote {
          position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 80%; font-size: 2.5rem; line-height: 1.2; text-align: center;
          opacity: 0; transition: 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none; color: #333; font-style: italic;
        }
        .typo-bg-quote.active { opacity: 1; transform: translate(-50%, -55%); color: #fff; }

        .typo-list { position: relative; z-index: 5; }

        .typo-item {
          display: flex; align-items: baseline; gap: 2rem;
          padding: 1rem 0; cursor: pointer;
          transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .typo-item:hover { padding-left: 2rem; border-color: #fff; }

        .typo-index { font-family: 'Space Mono', monospace; font-size: 0.8rem; color: #ff4500; }

        .typo-title { 
          font-size: clamp(3rem, 10vw, 8rem); font-weight: 900; 
          letter-spacing: -0.05em; line-height: 1;
          transition: 0.6s;
        }

        /* 다른 아이템 호버 시 현재 아이템 흐리게 */
        .typo-list:hover .typo-item:not(:hover) { opacity: 0.2; filter: blur(4px); }

        .typo-footer {
          position: fixed; bottom: 3rem; left: 4rem;
          font-family: 'Space Mono', monospace; font-size: 0.6rem; opacity: 0.3;
        }
      `}</style>

      <nav className="typo-nav">
        <div>THE_FLOATING_INDEX</div>
        <div>SCANNING_2026</div>
      </nav>

      <div className="typo-bg-quote ${hoveredIndex !== null ? 'active' : ''}">
        {hoveredIndex !== null && BOOKS[hoveredIndex].quote}
      </div>

      <main className="typo-list">
        {BOOKS.map((book, idx) => (
          <div
            key={idx}
            className="typo-item"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="typo-index">0{idx + 1}</span>
            <h2 className="typo-title">{book.title}</h2>
            <span className="typo-index" style={{ color: "#666" }}>
              {book.year}
            </span>
          </div>
        ))}
      </main>

      <footer className="typo-footer">
        INTERACTIVE TYPOGRAPHY EXPERIMENT // MINIMAL DATA SET
      </footer>
    </div>
  );
};

export default TypographyLibrary;
