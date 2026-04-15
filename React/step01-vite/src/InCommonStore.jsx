import React, { useState } from "react";

const InCommonStore = () => {
  const [filter, setFilter] = useState("All");

  const BOOKS = [
    {
      id: "01",
      title: "The Art of Silence",
      author: "Phoebe Sung",
      cat: "Art",
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200",
    },
    {
      id: "02",
      title: "Metropolitan",
      author: "James Rose",
      cat: "Arch",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200",
    },
    {
      id: "03",
      title: "Ceramic Study",
      author: "Adam P.",
      cat: "Design",
      img: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1200",
    },
    {
      id: "04",
      title: "Void & Form",
      author: "Elena Rossi",
      cat: "Art",
      img: "https://images.unsplash.com/photo-1543003968-24ad6902796e?q=80&w=1200",
    },
    {
      id: "05",
      title: "Natural Light",
      author: "Kenji Y.",
      cat: "Arch",
      img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1200",
    },
    {
      id: "06",
      title: "Daily Objects",
      author: "Sara J.",
      cat: "Design",
      img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1200",
    },
  ];

  return (
    <div className="ic-wrap">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:italic,wght@0,300;0,500;1,300&family=Inter:wght@300;400&display=swap');

        .ic-wrap { background: #F7F6F3; color: #1a1a1a; font-family: 'Inter', sans-serif; min-height: 100vh; }
        
        /* In Common With 특유의 와이드 네비게이션 */
        .ic-nav { 
          position: fixed; top: 0; width: 100%; display: flex; justify-content: space-between; 
          padding: 2.5rem 3rem; z-index: 1000; mix-blend-difference: multiply;
        }
        .ic-logo { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 500; letter-spacing: -0.02em; cursor: pointer; }
        .ic-nav-links { display: flex; gap: 4rem; text-transform: uppercase; font-size: 0.65rem; letter-spacing: 0.15em; font-weight: 400; }
        .ic-nav-links span { cursor: pointer; border-bottom: 1px solid transparent; transition: 0.3s; }
        .ic-nav-links span:hover { border-color: #1a1a1a; }

        /* 히어로 섹션 */
        .ic-hero { padding: 12rem 3rem 6rem 3rem; border-bottom: 1px solid #e2e2e2; }
        .ic-hero h1 { 
          font-family: 'Cormorant Garamond', serif; font-style: italic; font-weight: 300;
          font-size: clamp(3rem, 10vw, 9rem); line-height: 0.9; margin: 0; letter-spacing: -0.03em;
        }

        /* 필터 섹션 */
        .ic-filter-bar { padding: 2rem 3rem; display: flex; gap: 2rem; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #e2e2e2; }
        .filter-item { opacity: 0.4; cursor: pointer; transition: 0.3s; }
        .filter-item.active { opacity: 1; font-weight: 600; }

        /* 리스트 그리드 (In Common With 쇼룸 스타일) */
        .ic-grid { 
          display: grid; grid-template-columns: repeat(2, 1fr); 
          border-left: 1px solid #e2e2e2; 
        }
        .ic-item { 
          border-right: 1px solid #e2e2e2; border-bottom: 1px solid #e2e2e2;
          padding: 4rem; position: relative; overflow: hidden;
          transition: 0.5s;
        }
        .ic-item:hover { background: #fff; }

        .ic-img-box { width: 100%; aspect-ratio: 1/1.2; overflow: hidden; margin-bottom: 2.5rem; background: #eee; }
        .ic-img-box img { width: 100%; height: 100%; object-fit: cover; transition: 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .ic-item:hover img { transform: scale(1.05); }

        .ic-item-info { display: flex; justify-content: space-between; align-items: flex-start; }
        .ic-item-title { font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 300; margin: 0; line-height: 1.1; }
        .ic-item-sub { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.5; margin-top: 0.5rem; }
        .ic-add-btn { font-size: 1.2rem; cursor: pointer; opacity: 0.3; transition: 0.3s; }
        .ic-item:hover .ic-add-btn { opacity: 1; transform: rotate(90deg); }

        @media (max-width: 768px) {
          .ic-grid { grid-template-columns: 1fr; }
          .ic-nav-links { display: none; }
          .ic-hero h1 { font-size: 4rem; }
        }
      `}</style>

      <nav className="ic-nav">
        <div className="ic-logo">Common_Archive</div>
        <div className="ic-nav-links">
          <span>Shop</span>
          <span>Inspiration</span>
          <span>About</span>
          <span>Login</span>
        </div>
      </nav>

      <header className="ic-hero">
        <h1>
          Objects of
          <br />
          <i>Knowledge.</i>
        </h1>
      </header>

      <div className="ic-filter-bar">
        {["All", "Art", "Arch", "Design"].map((cat) => (
          <span
            key={cat}
            className={`filter-item ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </span>
        ))}
      </div>

      <main className="ic-grid">
        {BOOKS.filter((b) => filter === "All" || b.cat === filter).map(
          (book) => (
            <div key={book.id} className="ic-item">
              <div className="ic-img-box">
                <img src={book.img} alt={book.title} />
              </div>
              <div className="ic-item-info">
                <div>
                  <h3 className="ic-item-title">{book.title}</h3>
                  <div className="ic-item-sub">
                    {book.author} — {book.cat}
                  </div>
                </div>
                <div className="ic-add-btn">+</div>
              </div>
            </div>
          ),
        )}
      </main>

      <footer
        style={{
          padding: "8rem 3rem",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.65rem",
          opacity: 0.4,
        }}
      >
        <div>SENTIMENT ARCHIVE © 2026</div>
        <div>NEW YORK / SEOUL</div>
      </footer>
    </div>
  );
};

export default InCommonStore;
