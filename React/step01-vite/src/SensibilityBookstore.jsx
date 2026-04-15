import React, { useState } from "react";

const SensibilityBookstore = () => {
  const [category, setCategory] = useState("All");

  // 간단한 Mock Data
  const BOOKS = [
    {
      id: 1,
      title: "After Noon",
      author: "Jane Do",
      cat: "Fiction",
      price: "18,000",
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800",
    },
    {
      id: 2,
      title: "Minimal Life",
      author: "Kevin P.",
      cat: "Design",
      price: "22,000",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800",
    },
    {
      id: 3,
      title: "Urban Space",
      author: "M. Kuma",
      cat: "Art",
      price: "35,000",
      img: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800",
    },
    {
      id: 4,
      title: "Static",
      author: "S. Rossi",
      cat: "Fiction",
      price: "16,500",
      img: "https://images.unsplash.com/photo-1543003968-24ad6902796e?q=80&w=800",
    },
    {
      id: 5,
      title: "Bold Typography",
      author: "Adriel",
      cat: "Design",
      price: "28,000",
      img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800",
    },
    {
      id: 6,
      title: "Silence",
      author: "H. Choi",
      cat: "Art",
      price: "24,000",
      img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800",
    },
  ];

  const categories = ["All", "Fiction", "Design", "Art"];

  return (
    <div className="shop-wrap">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Playfair+Display:italic@1&display=swap');
        
        .shop-wrap { background: #fcfcfc; color: #1a1a1a; font-family: 'Inter', sans-serif; min-height: 100vh; }
        
        /* 1. 네비게이션 바 */
        .nav-bar { 
          position: sticky; top: 0; display: flex; justify-content: space-between; align-items: center;
          padding: 1.5rem 4rem; background: rgba(252, 252, 252, 0.8); backdrop-filter: blur(15px); z-index: 100;
          border-bottom: 1px solid #eee;
        }
        .logo { font-weight: 900; font-size: 1.2rem; letter-spacing: -1px; }
        .nav-menu { display: flex; gap: 3rem; font-size: 0.85rem; font-weight: 500; }
        .nav-menu span { cursor: pointer; opacity: 0.6; transition: 0.3s; }
        .nav-menu span:hover { opacity: 1; }
        .nav-right { display: flex; gap: 1.5rem; align-items: center; }
        .login-btn { 
          padding: 0.6rem 1.5rem; border-radius: 50px; background: #1a1a1a; color: #fff; 
          font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: 0.3s;
        }
        .login-btn:hover { background: #ff4500; }

        /* 2. 헤더 섹션 (카테고리) */
        .shop-header { padding: 6rem 4rem 3rem 4rem; }
        .shop-header h1 { font-family: 'Playfair Display', serif; font-style: italic; font-size: 4rem; margin-bottom: 3rem; }
        .category-list { display: flex; gap: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
        .cat-item { 
          font-size: 0.9rem; font-weight: 600; cursor: pointer; opacity: 0.3; transition: 0.3s; 
          position: relative;
        }
        .cat-item.active { opacity: 1; color: #ff4500; }
        .cat-item.active::after { 
          content: ''; position: absolute; bottom: -1rem; left: 0; width: 100%; height: 2px; background: #ff4500; 
        }

        /* 3. 책 리스트 그리드 */
        .book-grid { 
          display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
          gap: 4rem 2rem; padding: 4rem; 
        }
        .book-card { cursor: pointer; group; }
        .img-box { 
          width: 100%; aspect-ratio: 3/4; overflow: hidden; background: #f0f0f0; 
          margin-bottom: 1.5rem; transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 4px;
        }
        .book-card:hover .img-box { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .img-box img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
        .book-card:hover img { transform: scale(1.05); }
        
        .book-info { display: flex; flex-direction: column; gap: 0.3rem; }
        .book-cat { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: #ff4500; letter-spacing: 1px; }
        .book-title { font-size: 1.1rem; font-weight: 700; letter-spacing: -0.5px; }
        .book-author { font-size: 0.85rem; opacity: 0.5; }
        .book-price { font-size: 0.9rem; font-weight: 600; margin-top: 0.5rem; }

        @media (max-width: 768px) {
          .nav-bar { padding: 1rem 2rem; }
          .nav-menu { display: none; }
          .shop-header { padding: 4rem 2rem 2rem 2rem; }
          .book-grid { padding: 2rem; }
        }
      `}</style>

      {/* 네비게이션 */}
      <nav className="nav-bar">
        <div className="logo">SENTIMENT.LIB</div>
        <div className="nav-menu">
          <span>SHOP</span>
          <span>CURATION</span>
          <span>ABOUT</span>
          <span>JOURNAL</span>
        </div>
        <div className="nav-right">
          <span style={{ fontSize: "0.9rem", cursor: "pointer" }}>🔍</span>
          <div className="login-btn">LOGIN</div>
        </div>
      </nav>

      {/* 헤더 & 카테고리 */}
      <header className="shop-header">
        <h1>
          Selected
          <br />
          Archiving
        </h1>
        <div className="category-list">
          {categories.map((cat) => (
            <div
              key={cat}
              className={`cat-item ${category === cat ? "active" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>
      </header>

      {/* 메인 그리드 */}
      <main className="book-grid">
        {BOOKS.filter((b) => category === "All" || b.cat === category).map(
          (book) => (
            <div key={book.id} className="book-card">
              <div className="img-box">
                <img src={book.img} alt={book.title} />
              </div>
              <div className="book-info">
                <span className="book-cat">{book.cat}</span>
                <h3 className="book-title">{book.title}</h3>
                <span className="book-author">{book.author}</span>
                <span className="book-price">₩{book.price}</span>
              </div>
            </div>
          ),
        )}
      </main>

      <footer
        style={{
          padding: "5rem 4rem",
          opacity: 0.2,
          fontSize: "0.7rem",
          borderTop: "1px solid #eee",
        }}
      >
        © 2026 SENTIMENT BOOKSTORE. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

export default SensibilityBookstore;
