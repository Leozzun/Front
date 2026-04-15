import React, { useEffect, useState } from "react";

const PoeticArchive = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const BOOKS = [
    {
      id: 1,
      title: "오후의 문장들",
      author: "김서점",
      price: "16,000",
      cat: "Essays",
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200",
      pos: "left",
    },
    {
      id: 2,
      title: "Minimal Form",
      author: "Adriel Low",
      price: "28,000",
      cat: "Art",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200",
      pos: "right",
    },
    {
      id: 3,
      title: "밤의 기록",
      author: "사라 로시",
      price: "14,500",
      cat: "Poetry",
      img: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1200",
      pos: "center",
    },
    {
      id: 4,
      title: "Urban Fabric",
      author: "Kenji Y.",
      price: "35,000",
      cat: "Architecture",
      img: "https://images.unsplash.com/photo-1543003968-24ad6902796e?q=80&w=1200",
      pos: "left",
    },
  ];

  return (
    <div className="poetic-wrap">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:italic,opsz,wght@6-96,400;6-96,900&family=Noto+Serif+KR:wght@200;400;700&family=Inter:wght@300&display=swap');

        .poetic-wrap {
          background: #f0ede8; /* 오래된 종이 질감의 베이지 */
          color: #2c2c2c;
          font-family: 'Noto Serif KR', serif;
          transition: background 1s ease;
        }

        /* 1. 플로팅 내비게이션 (최소화) */
        .p-nav {
          position: fixed; top: 0; left: 0; width: 100%; padding: 2.5rem 4rem;
          display: flex; justify-content: space-between; align-items: flex-start;
          z-index: 1000; mix-blend-difference: difference;
        }
        .p-logo { font-family: 'Bodoni Moda', serif; font-size: 1.5rem; font-style: italic; font-weight: 900; letter-spacing: -0.05em; }
        .p-menu-icon { font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; cursor: pointer; }

        /* 2. 대담한 히어로 섹션 */
        .p-hero {
          height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;
          text-align: center; position: relative; overflow: hidden;
        }
        .p-hero-title {
          font-family: 'Bodoni Moda', serif; font-size: 15vw; font-style: italic; 
          line-height: 0.8; margin: 0; z-index: 2; transform: translateY(${scrolled * 0.2}px);
        }
        .p-hero-sub { margin-top: 3rem; font-size: 0.9rem; font-weight: 200; letter-spacing: 0.3em; opacity: 0.6; }

        /* 3. 불규칙한 그리드 (가장 예쁜 포인트) */
        .p-section { padding: 10vw 5vw; display: flex; flex-direction: column; gap: 20vw; }
        
        .p-book-item { position: relative; display: flex; width: 100%; transition: 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .p-book-item.left { justify-content: flex-start; }
        .p-book-item.right { justify-content: flex-end; }
        .p-book-item.center { justify-content: center; }

        .p-img-box {
          width: 35vw; aspect-ratio: 3/4; overflow: hidden;
          box-shadow: 30px 30px 80px rgba(0,0,0,0.08);
          transition: 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .p-img-box img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(20%); transition: 1.5s; }
        .p-book-item:hover .p-img-box { transform: scale(1.02) translateY(-20px); }
        .p-book-item:hover img { filter: grayscale(0%); transform: scale(1.1); }

        .p-book-info {
          position: absolute; bottom: -5vw; 
          display: flex; flex-direction: column; gap: 0.5rem;
          pointer-events: none;
        }
        .left .p-book-info { left: 38vw; text-align: left; }
        .right .p-book-info { right: 38vw; text-align: right; }
        .center .p-book-info { bottom: -8vw; text-align: center; width: 100%; }

        .p-title { font-size: 3rem; font-weight: 700; margin: 0; letter-spacing: -0.05em; }
        .p-author { font-size: 1rem; opacity: 0.5; font-style: italic; }
        .p-price { font-family: 'Inter', sans-serif; font-size: 0.8rem; margin-top: 1rem; letter-spacing: 0.1em; }

        /* 4. 장식적인 요소 */
        .p-bg-letter {
          position: absolute; font-family: 'Bodoni Moda', serif; font-size: 40vw;
          opacity: 0.03; pointer-events: none; z-index: 0; top: 20%; left: 10%;
        }

        /* 푸터 */
        .p-footer { height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; border-top: 1px solid rgba(0,0,0,0.05); }
        .p-footer-text { font-size: 1.2rem; font-weight: 200; opacity: 0.4; line-height: 2; text-align: center; }
      `}</style>

      <nav className="p-nav">
        <div className="p-logo">Archive_01</div>
        <div className="p-menu-icon">Explore — Index</div>
      </nav>

      <header className="p-hero">
        <div className="p-bg-letter">B</div>
        <h1 className="p-hero-title">
          Reading
          <br />
          is <i>Art.</i>
        </h1>
        <p className="p-hero-sub">취향의 문장들이 머무는 곳</p>
      </header>

      <main className="p-section">
        {BOOKS.map((book) => (
          <div key={book.id} className={`p-book-item ${book.pos}`}>
            <div className="p-img-box">
              <img src={book.img} alt={book.title} />
            </div>
            <div className="p-book-info">
              <span
                style={{
                  fontSize: "0.7rem",
                  opacity: 0.4,
                  letterSpacing: "0.2em",
                }}
              >
                {book.cat}
              </span>
              <h2 className="p-title">{book.title}</h2>
              <span className="p-author">{book.author}</span>
              <span className="p-price">₩{book.price}</span>
            </div>
          </div>
        ))}
      </main>

      <footer className="p-footer">
        <div className="p-footer-text">
          우리는 당신의 서재가
          <br />한 권의 시집이 되기를 바랍니다.
        </div>
        <div
          style={{
            marginTop: "5rem",
            fontSize: "0.7rem",
            opacity: 0.3,
            letterSpacing: "0.1em",
          }}
        >
          © 2026 POETIC ARCHIVE. SEOUL
        </div>
      </footer>
    </div>
  );
};

export default PoeticArchive;
